const Project = require("../models/project");
const express = require("express");
const router = express.Router();
const { project, task, subtask } = require("../config/mocks");

router.get("/", async (req, res) => {
  const projects = await Project.find({});
  console.log(projects);
  res.json(projects);
});

router.post("/", async (req, res) => {
  const project = await Project.create(req.body);
  res.json(project);
});

router
  .route("/:id")
  .get(async (req, res) => {
    const project = await Project.findById(req.params.id);
    res.json(project);
  })
  .put(async (req, res) => {
    const project = await Project.findByIdAndUpdate(
      { id: req.params.id },
      req.body
    );
    res.json(project);
  })
  .delete(async (req, res) => {
    const project = await Project.findByIdAndDelete(req.params.id);
    res.json(project);
  });

module.exports = router;
