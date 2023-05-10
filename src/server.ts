const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const app = express();

const MONGO_URL = process.env.MONGO_URI;

mongoose.connect(MONGO_URL);
const db = mongoose.connection;
db.on("error", (error: string) => console.error(error));
db.once("open", () => {
  console.log("MongoDB connection ready!");
});

app.use(express.json());

const PlanetsRouter = require("./routes/planets.router");
app.use("/planets", PlanetsRouter);

app.listen(3001, () => console.log("Listening on port 3001"));
console.log(new Date());
