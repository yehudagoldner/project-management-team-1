import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
// import type {} from '@mui/x-data-grid/themeAugmentation';
import { createTheme } from "@mui/material/styles";
import "./Backlog.css";
import { useEffect, useState } from "react";
import MainHeader from "../MainHeader/MainHeader";
import "./Backlog.css";
import { API } from "../Api/Api";
// import { ThemeProvider } from '@emotion/react/types/theming';
// import { createTheme } from '@mui/material';

// : GridRowsProp
const rows = [
  { id: 1, col1: "Hello", col2: "World", col3: "dfdf" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome", col3: "ee" },
  { id: 3, col1: "MUI", col2: "is Amazing", col3: "v v" },
];
// : GridColDef[]
const columns = [
  { field: "col1", headerName: "Task Name", width: 150 },
  { field: "col2", headerName: "Task Date", width: 150 },
  { field: "col3", headerName: "Task Urgency", width: 150 },
];

// const theme = createTheme({
//   components: {
//     MuiDataGrid: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "red",
//         },
//       },
//     },
//   },
// });

// interface BacklogProps {
//   task: Task;
// }
export default function Backlog({ task }) {
  const [subtasks, setSubtasks] = useState([]);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchSubTasks = async () => {
      try {
        const { data } = await API.get("/subtasks/");
        console.log(data);
        setSubtasks(data);
      } catch (error) {
        console.log(error.massage);
      }
    };
    fetchSubTasks();
    addRowsInfo(subtasks);
  }, []);

  const addRowsInfo = (subtasks) => {
    subtasks.forEach((subtask, i) => {
      const row = {};
      row.id = i + 1;
      row.col1 = subtask["name"];
      row.col2 = subtask["date"];
      row.col3 = subtask["urgency"];
      rows.push(row);
    });
  };

  return (
    <div className="Backlog">
      <MainHeader />
      <div
        style={{
          height: 400,
          width: "60%",
          backgroundColor: "white",
          margin: "auto",
        }}
      >
        <button>Add Task</button>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}
