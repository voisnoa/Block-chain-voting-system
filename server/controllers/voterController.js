
const Voter = require("../models/Voter");

const registerVoter = async (req, res) => {
    const { name, age, address, wallet_address, voter_id } = req.body;
    


    // Validate input
    if (!name || !age || !address || !wallet_address || !voter_id) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Check if voter ID exists in the database
        const validVoter = await Voter.findOne({ voter_id });

        if (!validVoter) {
            return res.status(404).json({ error: "No voter found with this ID. Please check and try again." });
        }

        // Check if voter is already registered
        if (validVoter.status === "approved") {
            return res.status(200).json({  
                message: "Voter already registered and approved.",
                voter: validVoter
            });
        }

        // Auto-approve the voter since their ID is valid
        validVoter.status = "approved";
        await validVoter.save();

        return res.status(201).json({ 
            message: "Registration successful! You are now approved to vote.", 
            voter: validVoter 
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = { registerVoter };
