const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
const expect = chai.expect;

describe("CRUD Operations", () => {
    beforeEach(() => {
        const db = require("../dataStore");
        db.create("1", "value 1");
    });

    it("should create new data", async () => {
        const res = await chai
            .request(app)
            .post("/create")
            .send({ id: "2", value: "value 2" });

        expect(res).to.have.status(201);
        expect(res.body)
            .to.have.property("msg")
            .equal("Data created successfully.");
    });

    it("should read data", async () => {
        const res = await chai.request(app).get("/read/1");

        expect(res).to.have.status(200);
        expect(res.body).to.have.property("id").equal("1");
        expect(res.body).to.have.property("value").equal("value 1");
    });

    it("should update existing data", async () => {
        const res = await chai
            .request(app)
            .put("/update/2")
            .send({ value: "Updated value 2" });

        expect(res).to.have.status(200);
        expect(res.body)
            .to.have.property("msg")
            .equal("Data updated successfully.");
    });

    it("should delete data", async () => {
        const res = await chai.request(app).delete("/delete/2");

        expect(res).to.have.status(200);
        expect(res.body)
            .to.have.property("msg")
            .equal("Data deleted successfully.");
    });
});