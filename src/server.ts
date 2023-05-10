const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.resolve(__dirname + "/.env"),
});

const app = express();

const MONGO_URL = process.env.MONGO_URI;
console.log(MONGO_URL);

app.listen(3001, () => console.log("Listening on port 3001"));
console.log(new Date());
