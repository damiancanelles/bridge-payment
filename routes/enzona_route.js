const express = require("express");
const router = express.Router();

const {ENZONA_bridge,ENZONA_bridge_unbody} = require("../controller/controller_enzona")

router.post("/", ENZONA_bridge);
router.post("/unbody", ENZONA_bridge_unbody);

module.exports = router;