import * as React from "react";
import { Link, useParams } from "react-router-dom";

import "./Backlog.css";
import { useEffect, useState } from "react";
import MainHeader from "../MainHeader/MainHeader";
import { API } from "../Api/Api";
import TasksHeader from "../TasksHeader/TasksHeader";
import moment from "moment";

export default function Backlog(props) {
  const [subtasks, setSubtasks] = useState([]);
  const [project, setProject] = useState({});

  const params = useParams();
  const taskId = params.id;

  useEffect(() => {
    const fetchSubTasks = async () => {
      try {
        const { data } = await API.get(`/subtasks/task/${taskId}`);
        console.log("subtasks by task:" + JSON.stringify(data));
        setSubtasks(data);
        console.log("subtasks in useEffect:" + JSON.stringify(subtasks));
      } catch (error) {
        console.log(error.massage);
      }
    };
    fetchSubTasks();
  }, []);
  return (
    <div className="Backlog">
      <MainHeader />

      <div className="subtasks">
        <h1 className="header">Subtasks</h1>
        <Link to={`/backlog/add`}>
          <button className="add-subtask">Add Subtask</button>
        </Link>
        <div className="rows-content">
          <div className="rowHeader row">
            <span>Name</span>
            <span>Date</span>
            <span>Urgency             </span>
          </div>
          {subtasks.map((subtask) => {
            return (
              <Link
                key={subtask._id}
                to={`/popup/${subtask._id}`}
                className="link"
              >
                <div className="subtask row">
                  <span>{subtask.name}</span>
                  <span>{moment(subtask.date).format('DD-MM-yyyy')}</span>
                  <span><span className={subtask.urgency==='LOW'  ? "green" :subtask.urgency==='MEDIUM'? "yellow":"red"}></span> </span>

                  <br />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
