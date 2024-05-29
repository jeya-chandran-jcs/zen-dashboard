const router = require("express").Router();
const User = require("../Models/StudentSchema");

router.get("/getAllStudents", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ students: users });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/getStudent/:id", async (req, res) => {
  const studentId = req.params.id;

  try {
    const user = await User.findById(studentId);

    if (!user) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ student: user });
  } catch (error) {
    console.error("Error fetching student details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/updateStudent/:id", async (req, res) => {
  const studentId = req.params.id;
  const { name, phone } = req.body;

  try {
    const user = await User.findById(studentId);
    if (!user) {
      return res.status(404).json({ message: "Student not found" });
    }

    user.name = name;
    user.phone = phone;

    await user.save();

    res.status(200).json({ message: "Student details updated successfully" });
  } catch (error) {
    console.error("Error updating student details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
