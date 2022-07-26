const mongoose = require("mongoose");

const ProjectSchema =  new mongoose.Schema( {

  title: {
    type: "string",
    required: true,

  },
  description: {
    type: "string",
    trim: true,
  },
  goal: {
    type: "string",
  },
  order: {
    type: "number",
    default: 0,
  },
});
const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
