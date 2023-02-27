const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

mongoose.set("strictQuery", false);
dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.DB_URL)
  .then(console.log("connected to DB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.listen("4000", () => {
  console.log("backend is running");
});
