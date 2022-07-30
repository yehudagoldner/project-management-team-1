import { Route, Routes, Switch } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Board from "../Board/Board";
import Main from "../Main/Main";
import Backlog from "../Backlog/Backlog.jsx";
import About from "../About/About";
import PopUp from "../PopUp/PopUp";
import App from "../../App";
function Routing() {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route index element={<MainPage />} />
        <Route path="/board/:id" element={<Board />} />
        <Route path="/backlog/:id" element={<Backlog />} />
        {/* <Route path="/backlog/add" element={<AddSubtask />} /> */}
        <Route path="/popup:id" element={<PopUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
export default Routing;
