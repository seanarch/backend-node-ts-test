const express = require("express");
const router = express.Router();
const Planet = require("../models/planet.model");

// GET
router.get("/", async (req, res) => {
  try {
    const planets = await Planet.find();
    res.json(planets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one
router.get("/", async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add one
router.post("/", async (req, res) => {});

// Update one
router.patch("/", async (req, res) => {});

// Delete one
router.delete("/", async (req, res) => {});

async function getPlanet(req, res, next) {
  let planet;
  try {
    planet = await Planet.findById(req.params.id);
    if (planet === null) {
      return res.status(404).json({ message: "Cannot find specific planet" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.planet = planet;
  next();
}

module.exports = router;
