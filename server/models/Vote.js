const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
    voter_id: { type: String, required: true, unique: true }, // Ensure unique vote per voter
    candidate_id: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Vote', VoteSchema);
