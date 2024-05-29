const express = require("express");
const router = express.Router();
const Leave = require("../Models/LeaveSchema");

router.post("/post", async (req, res) => {
  try {
    const { reason, appliedOn } = req.body;

    if (!reason || !appliedOn) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newLeave = new Leave({
      reason,
      appliedOn,
    });

    await newLeave.save();

    res.status(200).json({ message: "Leave submitted successfully" });
  } catch (error) {
    console.error("Error submitting leave:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/get", async (req, res) => {
  try {
    const leaveApplications = await Leave.find();

    res.status(200).json(leaveApplications);
  } catch (error) {
    console.error("Error fetching leave applications:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
