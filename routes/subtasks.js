const Subtask = require("../models/subtask");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const subtasks = await Subtask.find({});
  console.log(subtasks);
  res.json(subtasks);
});

router.post("/", async (req, res) => {
  const subtask = await Subtask.create(req.body);
  res.status(201).json(subtask);
});

router
  .route("/:id")
  .get(async (req, res) => {
    const subtask = await Subtask.findById(req.params.id);
    res.json(subtask);
  })
  .put(async (req, res) => {
    const subtask = await Subtask.findByIdAndUpdate(
      { id: req.params.id },
      req.body
    );
    res.json(subtask);
  })
  .delete(async (req, res) => {
    const subtask = await Subtask.findByIdAndDelete(req.params.id);
    res.json(subtask);
  });

module.exports = router;
