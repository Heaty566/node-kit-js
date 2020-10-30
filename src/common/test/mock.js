const mongodb = require("mongodb");

module.exports = async () => {
        const mongo = await mongodb.connect(process.env.DB_URL, {
                useUnifiedTopology: true,
        });
        return mongo.db("appTester");
};
