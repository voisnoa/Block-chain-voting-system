const express = require("express");
const { getCandidates, addCandidate } = require("../controllers/candidateController");
const router = express.Router();

// Route to get all candidates
router.get("/candidates", getCandidates);

// Route to add a new candidate
router.post("/candidates", addCandidate);

module.exports = router;
