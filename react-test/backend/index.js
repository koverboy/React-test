const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuid } = require("uuid");
const app = express();

app.use(bodyParser.json());

// app.get("/api/v2/user/me", function (req, res) {
//   res.json(me);
// });
app.listen(4000);