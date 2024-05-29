const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  batch: {
    type: String,
    require:true
  },
  
  mark: {
    type: String,
    require:true
  },

  title: {
    type: String,
    require:true
  },
  submittedOn: {
    type: String,
    require:true
  },
});

module.exports = mongoose.model("webcode", taskSchema, "webcode");
