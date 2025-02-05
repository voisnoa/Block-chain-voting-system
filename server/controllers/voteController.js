const Vote = require('../models/Vote');
const Voter = require('../models/Voter');


const castVote = async (req, res) => {
    const { voter_id, candidate_id } = req.body;
    console.log("Received Vote Request:", req.body); 


    if (!voter_id || !candidate_id) {
        return res.status(400).json({ error: 'Voter ID and candidate ID are required' });
    }

    try {
        // Check if the voter exists and is approved
        const voter = await Voter.findOne({ voter_id, status: 'approved' });
        if (!voter) {
            return res.status(403).json({ error: 'Voter not found or not approved' });
        }

        // Check if the voter has already voted
        const existingVote = await Vote.findOne({ voter_id });
        if (existingVote) {
            return res.status(400).json({ error: 'You have already voted' });
        }

        // Save the vote
        const newVote = new Vote({ voter_id, candidate_id });
        await newVote.save();

        res.status(201).json({ message: 'Vote cast successfully!' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { castVote };
