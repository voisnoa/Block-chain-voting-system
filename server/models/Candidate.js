const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  candidate_id: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Candidate", candidateSchema);
