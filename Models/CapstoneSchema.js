const mongoose = require("mongoose");

const capstoneSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Zen class student dashboard",
  },
  batch:{
    type:String,
    default:"B42WE Tamil"
  },
  
  comment: {
    type: String,
    default: "Waiting for review",
  },
  mark: {
    type: String,
    default: "Yet to be graded",
  },
  frontendUrl: {
    type: String,
    required: true,
  },
  backendUrl: {
    type: String,
    required: true,
  },
  frontendCode: {
    type: String,
    required: true,
  },
  backendCode: {
    type: String,
    required: true,
  },
 
});

module.exports = mongoose.model("Capstone", capstoneSchema,"capstone");
