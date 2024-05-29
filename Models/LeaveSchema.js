const mongoose = require("mongoose");



const leaveSchema = new mongoose.Schema({
  reason: {
    type: String,
    required:true,
  },
  appliedOn: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Waiting for Approval",
  },
 
});


module.exports = mongoose.model("Leave", leaveSchema, "leaves");