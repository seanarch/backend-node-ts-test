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
router.get("/", async (req, res) => {});

// Add one
router.post("/", async (req, res) => {});

// Update one
router.patch("/", async (req, res) => {});

// Delete one
router.delete("/", async (req, res) => {});
