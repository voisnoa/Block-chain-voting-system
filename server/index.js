const express = require('express');
require('dotenv').config();
const { resolve } = require('path');
const userRoutes = require('./Routes/userRoutes');
const connectDb = require('./db');
const cors = require('cors');
const voterRouter = require('./Routes/voter');
const voteRoutes = require('./Routes/vote');
const candidateRoutes = require("./Routes/candidateRoutes");



connectDb();

const app = express();
const port = 3012;

app.use(cors());
app.use(express.json()); 
app.use(express.static('static'));

app.use('/', userRoutes);
app.use('/',voterRouter)
app.use('/', voteRoutes);
app.use("/", candidateRoutes);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});