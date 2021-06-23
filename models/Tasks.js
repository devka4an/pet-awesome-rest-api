const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Enter the name of the task",
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: [
      {
        type: String,
        enum: ["pending", "ongoing", "completed"],
      },
    ],
    default: ["pending"],
  },
});

module.exports = mongoose.model("Tasks", tasksSchema);
