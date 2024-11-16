const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(
    "mongodb+srv://victoraremu:4C7GhfcE9aPC7YtS@nodedb.ywhms.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=nodeDB"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB", error);
  });
