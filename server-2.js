const express = require("express");
var cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  setTimeout(() => {
    // res.status(403);
    res.send({ data: 22 });
  }, 3000);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
