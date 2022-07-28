export const project = [
  {
    id: 1111,
    title: "AppleSeeds Project",
    description: "aaa",
    goal: "bbb",
    order: 1,
  },
];
export const task = [
  {
    id: 10000,
    title: "AppleSeedsTodo List",
    status: "todo",
    project: 1111,
    order: 1,
  },
  {
    id: 9999,
    title: "Refactor Recognition pace",
    status: "process",
    project: 1111,
    order: 1,
  },
  {
    id: 9998,
    title: "Navbar",
    status: "process",
    project: 1111,
    order: 2,
  },
  {
    id: 9997,
    title: "Button",
    status: "done",
    project: 1111,
    order: 1,
  },
  {
    id: 9996,
    title: "Header",
    status: "done",
    project: 1111,
    order: 2,
  },
  {
    id: 9995,
    title: "Form",
    status: "done",
    project: 1111,
    order: 3,
  },
];

export const subtask = [
  {
    id: 8888,
    name: "Push to Heroku",
    description: "ttt",
    date: "25.07.2022",
    urgency: "high",
    isCompleted: false,
    comments: "bla bla",
    isActive: true,
    task: 9995,
    order: 1,
  },
];

export const cardHeader = [
  {
    id: 1,
    name: "TODO",
  },
  {
    id: 2,
    name: "IN_PROCESS",
  },
  {
    id: 3,
    name: "DONE",
  },
];
