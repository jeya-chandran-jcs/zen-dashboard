const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const verifyToken = require("./middleware.js");
const StudentRouter=require("./Routes/StudentRouter")
const ProfileRouter=require("./Routes/ProfileRouter.js")
const classRouter=require("./Routes/ClassRouter")
const taskRouter=require("./Routes/TaskRouter")
const leaveRouter=require("./Routes/LeaveRouter")
const capstoneRouter=require("./Routes/CapstoneRouter.js")
const webcodeRouter=require("./Routes/WebcodeRouter.js")
const leaderboardRouter=require("./Routes/LeaderboardRouter.js")



dotenv.config();
const port = process.env.PORT;
const app = express();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection success"))
  .catch((err) => console.error("DB connection error:", err));

app.use(cors());

app.use(express.json());

app.use("/api/student",StudentRouter)
app.use("/api/profile",ProfileRouter)
app.use("/api/class",verifyToken,classRouter)
app.use("/api/task",verifyToken,taskRouter)
app.use("/api/leave",verifyToken,leaveRouter)
app.use("/api/capstone",verifyToken,capstoneRouter)
app.use("/api/webcode",verifyToken,webcodeRouter)
app.use("/api/leaderboard",verifyToken,leaderboardRouter)

app.listen(port, () => console.log("backend server started"));
