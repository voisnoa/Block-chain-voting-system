// const Voter = require('../models/Voter');

// // Register a new voter
// const registerVoter = async (req, res) => {
//     const { name, age, address, wallet_address, voter_id } = req.body;

//     // Validate input
//     if (!name || !age || !address || !wallet_address || !voter_id) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     try {
//         // Check if the voter already exists (by voter_id or wallet_address)
//         const existingVoter = await Voter.findOne({ $or: [{ voter_id }, { wallet_address }] });
//         if (existingVoter) {
//             return res.status(400).json({ error: 'Voter already registered with this ID or wallet address' });
//         }

//         // Create a new voter
//         const newVoter = new Voter({
//             voter_id,
//             name,
//             age,
//             address,
//             wallet_address,
//             status: 'pending', // Default status
//         });

//         // Save to database
//         await newVoter.save();
//         res.status(201).json({ message: 'Voter registered successfully. Awaiting approval.', voter: newVoter });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ error: 'Server error' });
//     }
// };

// module.exports = {
//     registerVoter,
// };

const Voter = require('../models/Voter');

const registerVoter = async (req, res) => {
    const { name, age, address, wallet_address, voter_id } = req.body;

    // Validate input
    if (!name || !age || !address || !wallet_address || !voter_id) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Check if voter ID exists in the database
        const validVoter = await Voter.findOne({ voter_id });

        if (!validVoter) {
            return res.status(404).json({ error: 'No voter found with this ID. Please check and try again.' });
        }

        // Check if voter is already registered
        if (validVoter.status === 'approved') {
            return res.status(400).json({ error: 'Voter already registered and approved.' });
        }

        // Auto-approve the voter since their ID is valid
        validVoter.status = 'approved';
        await validVoter.save();

        res.status(201).json({ message: 'Registration successful! You are now approved to vote.', voter: validVoter });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { registerVoter };
