const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find({});
  console.log(tasks);
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

router.get("/project/:id", async (req, res) => {
  const tasks = await Task.find({ project: req.params.id });
  res.json(tasks);
});

router
  .route("/:id")
  .get(async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
  })
  .put(async (req, res) => {
    const taskById = await Task.findById(req.params.id);
    if (!taskById) {
      throw new Error("Task was not found");
    }
    const newTask = {};
    if (req.body.title) {
      newTask.title = req.body.title;
    }
    if (req.body.status) {
      newTask.status = req.body.status;
    }
    if (req.body.project) {
      newTask.project = req.body.project;
    }
    if (req.body.order) {
      newTask.order = req.body.order;
    }
    const task = await Task.findByIdAndUpdate({ _id: req.params.id }, newTask, {
      new: true,
    });
    res.json(task);
  })
  .delete(async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.json({ task, message: "this object has been deleted" });
  });

module.exports = router;
