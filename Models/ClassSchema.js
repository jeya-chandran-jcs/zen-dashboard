const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date:String,
  content: String,
  preRead: String,
});

module.exports = mongoose.model("Class", classSchema, "Classes");
