const express = require("express");
const cors = require("cors");
const serverless = require('serverless-http');
const app = express();
const port = 4444;

app.use(cors());

const router = express.Router();

router.get("/", (req, res) => {
  setTimeout(() => {
    // res.status(403);
    res.send({ data: 11 });
  }, 1000);
});

app.use(`/.netlify/functions/api`, router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports.handler = serverless(app);
