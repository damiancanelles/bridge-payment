const express = require("express");
const router = express.Router();

const {test, TRANSFERMOVIL_bridge, TRANSFERMOVIL_bridge_unbody, complete} = require("../controller/controller_transfermovil")

router.get("/test", test);
router.post("/", TRANSFERMOVIL_bridge);
router.post("/complete", complete);
router.post("/json", TRANSFERMOVIL_bridge_unbody);

module.exports = router;    