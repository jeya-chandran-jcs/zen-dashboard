const express = require("express");
const router = express.Router();
const Capstone = require("../Models/CapstoneSchema");

router.post("/post", async (req, res) => {
  try {
    const {
      comment,
      frontendUrl,
      backendUrl,
      frontendCode,
      backendCode,
    } = req.body;

    const newCapstone = new Capstone({
      comment,
      frontendUrl,
      backendUrl,
      frontendCode,
      backendCode,
    });

    await newCapstone.save();

    res.status(201).json({ message: "Capstone submitted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/get", async (req, res) => {
  try {
    const data = await Capstone.find();
    res.status(200).json(data); 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
