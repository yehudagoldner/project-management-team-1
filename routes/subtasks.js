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

router.get("/task/:id", async (req, res) => {
  const subtasks = await Subtask.find({ task: req.params.id });
  res.send(subtasks);
});

router
  .route("/:id")
  .get(async (req, res) => {
    const subtask = await Subtask.findById(req.params.id);
    res.json(subtask);
  })
  .put(async (req, res) => {
    const subtaskById= await Subtask.findById(req.params.id);
    // try
    {
    if(!subtaskById){throw new Error("subtask was not found")};
  
    const newSubtask={};
    if(req.body.name){newSubtask.name=req.body.name};
    if(req.body.description){newSubtask.description=req.body.description};
    if(req.body.date){newSubtask.date=req.body.date};
    if(req.body.urgency){newSubtask.urgency=req.body.urgency};
    if(req.body.isCompleted){newSubtask.isCompleted=req.body.isCompleted};
    if(req.body.comments){newSubtask.comments=req.body.comments};
    if(req.body.isActive){newSubtask.isActive=req.body.isActive};
    if(req.body.task){newSubtask.task=req.body.task};
    if(req.body.order){newSubtask.order=req.body.order};
    const subtask = await Subtask.findByIdAndUpdate(      { _id: req.params.id }, newSubtask, {new:true}   );
    res.json(subtask);}
    // catch(err){res.send(err)}
  })
  .delete(async (req, res) => {
    const subtask = await Subtask.findByIdAndDelete(req.params.id);
    res.json(subtask);
  });

module.exports = router;
