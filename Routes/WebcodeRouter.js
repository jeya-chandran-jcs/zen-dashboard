const mongoose = require("mongoose");
const router = require("express").Router();
const webcode = require("../Models/WebcodeSchema"); 

router.post("/post", async (req, res) => {
  try {
    const {
      title,
      mark,
      batch,
      submittedOn,
    } = req.body;

    const newWebcode = new webcode({
        title,
        mark,
        batch,
        submittedOn,
    });

    await newWebcode.save();

    res.status(200).json({ message: "Task submitted successfully" });

  } catch (error) {
    console.error(error.message); 
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/get", async (req, res) => {
  try {
    const data = await webcode.find(); 
    res.status(200).json(data); 
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
