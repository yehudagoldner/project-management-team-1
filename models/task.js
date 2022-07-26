const mongoose = require("mongoose");
const Project = require("./project");

const TaskSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  status: {
    type: "string",
  },
  project: {
    type: mongoose.Types.ObjectId,
    ref: "Project",
  },
  order: {
    type: "number",
    default: 0,
  },
});
const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
