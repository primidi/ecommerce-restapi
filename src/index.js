const express = require("express");
const bodyParser = require("body-parser");

const port = require("./config/server");
const productRoute = require("./routes/product-routes");
require("./utils/db");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Default root url
app.get("/", (req, res) => {
  res.send("Welcome to E-commerce API");
});

// Product's API middleware
app.use("/api/product", productRoute);

app.listen(port, () => {
  console.log(`Product's API is listening at http://localhost:${port}`);
});
