import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board/Board";
import MainPage from "./components/MainPage/MainPage";
import Backlog from "./components/Backlog/Backlog.tsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (


    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/board/:id" exact component={Board} />
          <Route path="/backlog" exact component={Backlog} />
          {/* <Route path="/about" element={About} /> */}
        </Switch>
      </BrowserRouter>

    </div>
  );
  // return (
  //   <div className="App">
  //   <>
  //     <Backlog />
  //   </>
  //   </div>
  // );
}

export default App;
