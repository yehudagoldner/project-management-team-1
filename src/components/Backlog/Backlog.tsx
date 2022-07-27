import * as React from 'react';
import { DataGrid , GridRowsProp, GridColDef} from '@mui/x-data-grid';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { createTheme } from '@mui/material/styles';
import  './Backlog.css';
// : GridRowsProp
const rows = [
    { id: 1, col1: 'Hello', col2: 'World' ,col3:"dfdf"},
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome',col3:"ee" },
    { id: 3, col1: 'MUI', col2: 'is Amazing',col3:"v v" },
  ];
  // : GridColDef[]
  const columns = [
    { field: 'col1', headerName: 'Task Name', width: 150 },
    { field: 'col2', headerName: 'Task Date', width: 150 },
    { field: 'col3', headerName: 'Task Urgency', width: 150 },
  ];

  const theme = createTheme({
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            backgroundColor: 'blue',
          },
        },
      },
    },
  });

  // interface BacklogProps {
  //   task: Task;
  // }
  export default function Backlog() {
    return (
      <div  style={{ height: 300, width: '60%' ,backgroundColor:"pink"}}>
        <div></div>
        <button>Add Task</button>
        <DataGrid  rows={rows} columns={columns} />
      </div>
    );
  }