const getDB = require("../test/mock");
const { mockUser } = require("./mocks/mockUser");

describe("test", () => {
        let db;
        beforeAll(async () => {
                db = await getDB();
                await mockUser(db);
        });

        afterAll(async () => {
                await db.dropDatabase();
        });

        it("done test", () => {});
});
