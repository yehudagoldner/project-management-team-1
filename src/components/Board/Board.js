import "./Board.css";
import { useEffect, useState } from "react";
import RenderCard from "./RenderData";
import TaskHeader from "../TasksHeader/TasksHeader";
import { API } from "../Api/Api";
import { useParams } from "react-router-dom";

const Board = (props) => {
  const [data, setData] = useState([]);
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      // const projectId = window.btoa(props.match.params.id);
      // const projectId = props.match.params._id;
      const projectId = id;
      console.log(projectId);
      try {
        const { data } = await API.get(`/tasks/project/${projectId}`);
        console.log(data);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTasks();
  }, []);
  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      // const projectId = window.btoa(props.match.params.id);
      // const projectId = props.match.params._id;
      const projectId = id;
      console.log(projectId);

      try {
        const { data } = await API.get(`/projects/${projectId}`);
        console.log(data);
        setProject(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProject();
  }, []);

  return isLoading ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : (
    <div className="main-board">
      <TaskHeader project={project} />
      <div className="board-card-container">
        <RenderCard data={data} setData={setData} />
      </div>
    </div>
  );
};

export default Board;
