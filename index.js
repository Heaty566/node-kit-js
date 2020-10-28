const express = require("express");
const path = require("path");

require("dotenv").config({
        path: path.resolve(
                __dirname,
                `./src/config/.env.${process.env.NODE_ENV}`
        ),
});

const prod = require("./src/app/prod");
const router = require("./src/app/router");
const initDB = require("./src/app/db");
const app = express();

//setup project
initDB();
prod(app);
router(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
        console.log(`Current mode: ${process.env.NODE_ENV}`);
        console.log(`Listening on port ${port}`);
});
