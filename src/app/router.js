const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

module.exports = function (app) {
        app.use(express.json());
        app.use(cors({ credentials: true }));
        app.use(cookieParser());
        app.use(express.static(process.cwd() + "/public"));
        app.use(morgan("dev"));

        app.use((req, res, next) => {
                req.header("Access-Control-Allow-Origin", "*");
                req.header("Access-Control-Allow-Headers", "*");

                next();
        });
};
