import { Route, Routes } from "react-router-dom";
function Routing() {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route index element={<MainPage />} />
        <Route path="/board" element={<Board />} />
        <Route path="/backlog" element={<Backlog />} />
        <Route path="/subtask" element={<Subtask />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
export default Routing;
