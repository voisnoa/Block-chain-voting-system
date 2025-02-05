const express = require("express");
const Resultrouter = express.Router();
const voteResultsController = require("../controllers/voteResultsController");

// Get vote results
Resultrouter.get("/results", voteResultsController.getVoteResults);

module.exports = Resultrouter;