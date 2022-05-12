const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuid } = require("uuid");
const app = express();

app.use(bodyParser.json());
app.get("", function (req, res) {
    res.json(1);
  });
app.get("/api/v2/user/me", function (req, res) {
  res.json(1);
});
app.listen(3001, () => {
    console.log("running on port 3001")
})