const mongoose = require("mongoose");
const consts = require("../config/consts.js");

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
    // default: Math.floor(new Date().getTime() / 1000),
    default: new Date()
  },
  urgency: {
    type: "string",
    default: consts.urgencies[1]
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  comments: {
    type: "string",
    default: ""
  },
  isActive: {
    type: Boolean,
    default: true,
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
