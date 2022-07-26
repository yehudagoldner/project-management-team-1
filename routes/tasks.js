const Task = require("../models/task");
const express = require("express");
const router = express.Router();
const { project, task, subtask } = require("../config/mocks");

router.get("/", async (req, res) => {
  const tasks = await Task.find({});
  console.log(tasks);
  res.json(tasks);
});

router.post("/",async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

router
  .route("/:id")
  .get(async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
  })
  .put(async(req, res) => {
    const task = await Task.findByIdAndUpdate({ id: req.params.id},req.body);
    res.json(task);
  })
  .delete(async(req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    res.json(task);
  });

module.exports = router;
