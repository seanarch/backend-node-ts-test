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
router.get("/:id", getPlanet, async (req, res) => {
  res.json(res.planet);
});

// Add one
router.post("/", async (req, res) => {
  const planet = new Planet({
    keplerName: req.body.keplerName,
  });

  try {
    const newPlanet = await planet.save();
    res.status(201).json(newPlanet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one
router.patch("/:id", getPlanet, async (req, res) => {
  if (req.body.keplerName !== null) {
    res.planet.keplerName = req.body.keplerName;
  }
  try {
    const updatedPlanet = await res.planet.save();
    res.json(updatedPlanet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one
router.delete("/:id", getPlanet, async (req, res) => {
  try {
    await res.planet.deleteOne();
    res.json({ message: "Deleted Planet" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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
