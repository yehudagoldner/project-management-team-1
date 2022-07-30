const Project = require("../models/project");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await Project.find({});

  res.json(projects);
});

router.post("/", async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(project);
});

router
  .route("/:id")
  .get(async (req, res) => {
    const project = await Project.findById(req.params.id);
    res.json(project);
  })
  .put(async (req, res) => {
    const projectById = await Project.findById(req.params.id);
    if (!projectById) {
      throw new Error("Project was not found");
    }
    const newProject = {};
    if (req.body.title) {
      newProject.title = req.body.title;
    }
    if (req.body.description) {
      newProject.description = req.body.description;
    }
    if (req.body.goal) {
      newProject.goal = req.body.goal;
    }
    if (req.body.order) {
      newProject.order = req.body.order;
    }
    const project = await Project.findByIdAndUpdate(
      { _id: req.params.id },
      newProject,
      { new: true }
    );
    res.json(project);
  })
  .delete(async (req, res) => {
    const project = await Project.findByIdAndDelete(req.params.id);
    res.json(project);
  });

module.exports = router;
