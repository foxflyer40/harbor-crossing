const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000
require('dotenv').config()

app.use(express.static(path.resolve("./client/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/build/index.html"))
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});