const express = require("express");
const router = express.Router();
const { createFilm, findFilm } = require("../controllers/film");

router.post("/create", createFilm);
router.get("/find", findFilm)

module.exports = router;