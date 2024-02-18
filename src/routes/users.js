const express = require("express");
const router = express.Router();
const { createUser, findUser } = require("../controllers/users");
const userSchema = require("../schemas/utilisateur");
const { validateSchemaMiddleware } = require("../services/validateSchema");
// const { addUid } = require("../services/addUid");

router.post("/create", validateSchemaMiddleware(userSchema), createUser);
router.get("/find", findUser)

module.exports = router;