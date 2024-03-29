const express = require("express");
const router = express.Router();
const { createWatchlist, findWatchlist } = require("../controllers/watchlist");

router.post("/create", createWatchlist);
router.get("/find", findWatchlist)

module.exports = router;