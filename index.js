const express = require("express");
const path = require("path");
const { getDB } = require("./src/app/db");

require("dotenv").config({
        path: path.resolve(
                __dirname,
                `./src/config/.env.${process.env.NODE_ENV}`
        ),
});

const app = express();
require("./src/app/prod")(app);
require("./src/app/router")(app);
require("./src/app/db")();

app.use("/hello", async (req, res) => {
        console.log(getDB());
        const db = getDB().collection("user");
        const user = await db.findOne({ username: "123" });
        res.send(user);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
});
module.exports = app;
