const Vote = require("../models/Vote");
const Candidate = require("../models/Candidate");

exports.getVoteResults = async (req, res) => {
  try {
    const results = await Vote.aggregate([
      { $group: { _id: "$candidate_id", count: { $sum: 1 } } },
      { $lookup: { from: "candidates", localField: "_id", foreignField: "candidate_id", as: "candidate" } },
      { $unwind: "$candidate" },
      { $project: { _id: 0, candidate_id: "$candidate.candidate_id", name: "$candidate.name", votes: "$count" } }
    ]);

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch results" });
  }
};