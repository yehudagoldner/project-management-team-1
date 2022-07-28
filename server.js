const express = require("express");
 require("./config/dbconnect");
const app = express();
const cors = require("cors");
app.use(cors());
app.set("view engine", "ejs");


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Here");
  res.render("index", { text: "world" });

});

const taskRouter = require("./routes/tasks");
const projectRouter = require("./routes/projects");
const subtaskRouter = require("./routes/subtasks");


app.use("/tasks", taskRouter);
app.use("/projects", projectRouter);
app.use("/subtasks", subtaskRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
app.listen(4000);
