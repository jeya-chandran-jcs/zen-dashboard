const mongoose = require("mongoose");
const router = require("express").Router();
const Task = require("../Models/TaskSchema");

router.post("/post", async (req, res) => {
  try {
    const {
      day,
      frontEndCode,
      frontEndURL,
      backEndCode,
      backEndURL,
      task,
      title,
    } = req.body;

    const newTask = new Task({
      day,
      frontEndCode,
      frontEndURL,
      backEndCode,
      backEndURL,
      task,
      title,
    });

    await newTask.save();

    res.status(200).json({ message: "Task submitted successfully" });

  } catch (error) {
    console.error(error.message); 
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/get", async (req, res) => {
  try {
    const tasks = await Task.find(); 
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
