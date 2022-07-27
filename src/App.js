import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board/Board";
import MainPage from './components/MainPage/MainPage';
import Backlog from './components/Backlog/Backlog.tsx';

function App() {
  return (
    <div className="App">
    <>
      <Backlog />
    </>
    </div>
  );
}

export default App;
