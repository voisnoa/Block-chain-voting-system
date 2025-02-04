const Voter = require('../models/Voter');

// Register a new voter
const registerVoter = async (req, res) => {
    const { name, age, address, wallet_address, voter_id } = req.body;

    // Validate input
    if (!name || !age || !address || !wallet_address || !voter_id) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Check if the voter already exists (by voter_id or wallet_address)
        const existingVoter = await Voter.findOne({ $or: [{ voter_id }, { wallet_address }] });
        if (existingVoter) {
            return res.status(400).json({ error: 'Voter already registered with this ID or wallet address' });
        }

        // Create a new voter
        const newVoter = new Voter({
            voter_id,
            name,
            age,
            address,
            wallet_address,
            status: 'pending', // Default status
        });

        // Save to database
        await newVoter.save();
        res.status(201).json({ message: 'Voter registered successfully. Awaiting approval.', voter: newVoter });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    registerVoter,
};
