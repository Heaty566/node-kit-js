const mongodb = require("mongodb");
const mongodbURI = require("mongodb-uri");

let _db;

//initialized database
module.exports = function () {
        mongodb.connect(
                process.env.DB_URL,
                { useUnifiedTopology: true },
                (error, result) => {
                        const dbInfo = mongodbURI.parse(process.env.DB_URL);
                        console.log(
                                `Connect to database on host ${dbInfo.hosts[0].host}`
                        );
                        _db = result.db(process.env.DB_NAME);
                }
        );
};

//get db for controller
module.exports.getDB = () => {
        if (!_db) {
                console.error("You have to initialized DB");
                return;
        }

        return _db;
};
