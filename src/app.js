const express = require("express");
const path = require("path");

require("dotenv").config({
        path: path.resolve(
                __dirname,
                `./src/config/.env.${process.env.NODE_ENV}`
        ),
});

const app = express();
require("./app/prod")(app);
require("./app/router")(app);
require("./app/db");

module.exports = app;
