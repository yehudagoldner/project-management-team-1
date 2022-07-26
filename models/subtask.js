const mongoose = require("mongoose");

const SubTaskSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
    trim: true,
  },
  description: {
    type: "string",
    trim: true,
  },
  date: {
    type: "date",
    default: Math.floor(new Date().getTime() / 1000),
  },
  urgency: {
    type: "string",
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  comments: {
    type: "string",
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  task: {
    required: true,
    type: mongoose.Types.ObjectId,
    ref: "Task",
  },
  order: {
    type: "number",
    default: 0,
  },
});
const SubTask = mongoose.model("SubTask", SubTaskSchema);
module.exports = SubTask;
