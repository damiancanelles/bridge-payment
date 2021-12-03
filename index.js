const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
var cors = require('cors');
const enzonaRoutes = require("./routes/enzona_route")

//midlewares
app.use(express.static('static'));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//routes
app.use("/enzona",enzonaRoutes);

//config
let port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("server running");
});