const mongoose = require("mongoose");
const router = require("express").Router();
const Class = require("../Models/ClassSchema");

router.post("/post", async (req, res) => {
  try {
    const { title, date, content, preRead } = req.body;

    const newClass = new Class({
      title,
      date,
      content,
      preRead,
    });

    await newClass.save();

    res.status(200).json({ message: "Class submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/get", async (req, res) => {
  try {
    const classes = await Class.find();

    res.status(200).json(classes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
