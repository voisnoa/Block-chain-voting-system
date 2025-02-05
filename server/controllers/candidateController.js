const Candidate = require("../models/Candidate");

// Get all candidates
const getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find({});
    res.json(candidates);
  } catch (error) {
    console.error("Error fetching candidates:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const addCandidate = async (req, res) => {
    const { name, candidate_id } = req.body;
  
    if (!name || !candidate_id) {
      return res.status(400).json({ error: "Name and Candidate ID are required." });
    }
  
    try {
      // Check if candidate already exists
      const existingCandidate = await Candidate.findOne({ candidate_id });
      if (existingCandidate) {
        return res.status(400).json({ error: "Candidate ID already exists." });
      }
  
      // Create and save new candidate
      const newCandidate = new Candidate({ name, candidate_id });
      await newCandidate.save();
  
      res.status(201).json({ message: "Candidate added successfully.", candidate: newCandidate });
    } catch (error) {
      console.error("Error adding candidate:", error);
      res.status(500).json({ error: "Server error" });
    }
  };
  
  module.exports = { getCandidates, addCandidate };
