import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link } from "react-router-dom";
import "./TasksHeader.css";
import logo from '../../assets/logo.jpg'

const TasksHeader = ({ project }) => {
  return (
    <nav className="header-continer">
      <ul>
        <li className="first-li">
          <Link to="/">{project.title}</Link>
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
      <div className="last-li"><img src={logo} alt=""/></div>
    </nav>
  );
};

export default TasksHeader;
