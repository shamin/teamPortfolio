const tape = require("tape");
const router = require("../router.js");
const supertest = require("supertest");

tape("test if home route is being served", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("Content-type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200");
      t.end();
    });
});

tape("Invalid url returns 404 status code", t => {
  supertest(router)
    .get("/wioejfojw")
    .expect(404)
    .expect("Content-type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 404, "Should return 404");
      t.end();
    });
});

tape("test if css is being served", t => {
  supertest(router)
    .get("/public/style.css")
    .expect(200)
    .expect("Content-type", /css/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200");
      t.end();
    });
});

tape("test if js is being served", t => {
  supertest(router)
    .get("/public/js/app.js")
    .expect(200)
    .expect("Content-type", /application\/javascript/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200");
      t.end();
    });
});
