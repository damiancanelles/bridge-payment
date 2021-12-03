const express = require("express");
const router = express.Router();

const {ENZONA_bridge} = require("../controller/controller_enzona")

router.post("/", ENZONA_bridge);

module.exports = router;