const { statuses,urgencies} = require("./consts.js");

const date = Math.floor(new Date().getTime() / 1000);

const project = {
  title: "Middle project",
  description:
    "Middle project of AppleSeeds bootcamp",
  goal: "practice everything up to React",
  id: "1",
  order: "1",
};

const task = {
  title: "Create function component",
  status: statuses[1],
  project:
    "1",
  id: "1",
  order: "1",
};


const subtask = {
  name: "todo app",
  description:    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, animi",
  date: date,
  urgency: urgencies[2],
  isCompleted:false,
  comments:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, animi",
  isActive: false,
  task: "1",
  id: "1",
  order: "1",
};

module.exports = { project, task, subtask };
