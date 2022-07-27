import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link } from "react-router-dom";
import "./TasksHeader.css";
const TasksHeader = ({ project }) => {
  return (
    <nav className="header-continer">
      <ul>
        <li className="first-li">
          <Link to="">{project.title}</Link>
          <PlayArrowIcon />
        </li>
        <li>
          <Link to={`/board/${project._id}`}>Board</Link>
        </li>
        <li>
          <Link to="/backlog">Backlog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="last-li">LOGO</div>
    </nav>
  );
};

export default TasksHeader;
