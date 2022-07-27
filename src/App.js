import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board/Board";
import MainPage from "./components/MainPage/MainPage";
// import PopUp from "./components/Popup/PopUp";
import Backlog from "./components/Backlog/Backlog.jsx";

function App() {
  return (
    <div className="App">
      <h1>Projects</h1>
      <MainPage/>
    </div>
  );
}

export default App;
