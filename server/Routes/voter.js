const express = require('express');

const voterRouter = express.Router();
const { registerVoter } = require('../controllers/voterController');

voterRouter.post('/register-voter', registerVoter);

module.exports = voterRouter;
