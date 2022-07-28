import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board/Board";
import MainPage from "./components/MainPage/MainPage";
import PopUp from "./components/PopUp/PopUp";
import Backlog from "./components/Backlog/Backlog.jsx";
import Routing from "./components/Routing/Routing"
import { BrowserRouter, Route, Switch } from "react-router-dom";
export default function App() {
  // return (
  //   <div className="App">
  //                <Routing />
            {/* <Outlet /> */}
      {/* <MainPage/> */}


  return (


    <div>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/board/:id" exact component={Board} />
          <Route path="/backlog" exact component={Backlog} />
          <Route path="/popup" exact component={PopUp} />
          {/* <Route path="/about" element={About} /> */}
        </Switch>

    </div>
  );

}


