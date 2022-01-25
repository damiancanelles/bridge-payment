const express = require("express");
const router = express.Router();

const {test} = require("../controller/controller_transfermovil")

router.get("/test", test);

module.exports = router;