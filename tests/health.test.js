const request = require("supertest");
const app = require("../src/app");

describe("Health Check API", () => {
  it("Get /health dovrebbe ritornare status = UP", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("UP");
  });
});
