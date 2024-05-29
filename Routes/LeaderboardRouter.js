const mongoose = require("mongoose");
const router = require("express").Router();
const Leaderboard = require("../Models/LeaderboardSchema");

router.post("/post", async (req, res) => {
  try {
    const { name, learning } = req.body;

    const newEntry = new Leaderboard({
      name,
      learning
    });

    await newEntry.save();

    res.status(200).json({ message: "Entry submitted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/get", async (req, res) => {
  try {
    const entries = await Leaderboard.find();
    res.status(200).json(entries);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
