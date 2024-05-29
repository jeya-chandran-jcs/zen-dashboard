const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  frontEndCode: {
    type: String,
  },
  frontEndURL: {
    type: String,
  },
  backEndCode: {
    type: String,
  },
  backEndURL: {
    type: String,
  },
  mark: {
    type: String,
  },

  title: {
    type: String,
  },
  submittedOn: {
    type: String,
  },
});

module.exports = mongoose.model("Task", taskSchema, "Tasks");
