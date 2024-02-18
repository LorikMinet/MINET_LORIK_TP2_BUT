const express = require("express")
const app = express();
const users = require("./users")
const watchlist = require("./watchlist")
const film = require("./film")


app.use(express.json())
app.use("/user", users);
app.use("/watchlist", watchlist);
app.use("/film", film);

module.exports = app;