const assert = require("assert");
const http = require("http");
const cheerio = require("cheerio");
const { shouldBeOk, shouldHaveMessage, request } = require("./helpers");
require("dotenv").config();

describe("GET /login", () => {
  it("should have the correct status (200)", (done) => {
    shouldBeOk("GET", "/login", done);
  });
  it("should have the correct message", (done) => {
    shouldHaveMessage("GET", "/login", "GET /login", done);
  });
});

describe("Get reset-password", () => {
  it("should have the correct status (200)", (done) => {
    shouldBeOk("GET", "/reset-password/token123", done);
  });

  it("should have the correct message", (done) => {
    shouldHaveMessage(
      "GET",
      "/reset-password/token123",
      "GET /reset-password token123",
      done
    );
  });
});
describe("POST /reset-password", () => {
  it("should have the correct status (200)", (done) => {
    shouldBeOk("POST", "/reset-password/token123", done);
  });

  it("should have the correct message ", (done) => {
    shouldHaveMessage(
      "POST",
      "/reset-password/token123",
      "POST /reset-password token123",
      done
    );
  });
});

describe("GET /:customer", () => {
  it("should have the correct status (200)", (done) => {
    shouldBeOk("GET", "/assertchris", done);
  });
  it("should have the correct message", (done) => {
    shouldHaveMessage(
      "GET",
      "/assertchris",
      "GET /:customer assertchris",
      done
    );
  });
});
// ...tests omitted for brevity
describe("DELETE /:customer/:product", () => {
  it("should have the correct status (200)", (done) => {
    shouldBeOk("DELETE", "/assertchris/teddy", done);
  });
  it("should have the correct message", (done) => {
    shouldHaveMessage(
      "DELETE",
      "/assertchris/teddy",
      "DELETE /:customer/:product assertchris teddy",
      done
    );
  });
});

describe("GET /register", () => {
  it("should have the correct status (200)", (done) => {
    shouldBeOk("GET", "/register", done);
  });

  it("should have the correct markup", (done) => {
    request("GET", "/register", (markup) => {
      const find = cheerio.load(markup);
      assert.equal(find("h1").text(), "Register");
      // assert.equal(find("input[...]").length, 1)
      // assert.equal(find("input[...]").length, 1)
      // assert.equal(find("input[...]").length, 1)
      done();
    });
  });
});
