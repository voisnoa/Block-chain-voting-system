const mongoose = require('mongoose');

const VoterSchema = new mongoose.Schema({
    voter_id: { type: String, required: true, unique: true }, 
    name: { type: String, required: true },
    age: { type: Number, required: true }, 
    address: { type: String, required: true }, 
    wallet_address: { type: String, required: true, unique: true },
    status: { type: String, default: 'pending' }, 
    
},
{
    timestamps: true});

module.exports = mongoose.model('Voter', VoterSchema);
