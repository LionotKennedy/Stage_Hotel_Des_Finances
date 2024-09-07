const mongoose = require("mongoose");

const JournalSchema = new mongoose.Schema({
  action: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  details: {
    type: String,
    required: true,
  },
});

const Journal = mongoose.model("Journals", JournalSchema);
module.exports = Journal;
