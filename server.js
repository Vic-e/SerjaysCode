const express = require("express");
const app = express();
// const cors = require("cors");
const mongoose = require("mongoose");
// Always require and configure near the top
require('dotenv').config()

//// ===== Connection to Database =====
require("./config/database");
// app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)

const db = mongoose.connection

db.on('connected', () => {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
})


app.listen(3001, function() {
    console.log("express server running on port 3001")
})