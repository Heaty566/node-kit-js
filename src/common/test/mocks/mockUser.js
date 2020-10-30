const { fakeData } = require("./mockData");

module.exports.mockUser = async (db) => {
        for (let index = 0; index < 10; index++) {
                await db.collection("user").insertOne({
                        username: fakeData(10, "lettersAndNumbers"),
                });
        }
};
