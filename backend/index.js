const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const employeeRoute = require("./routes/usersRoute");

mongoose.set("strictQuery", false);
dotenv.config();

// CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(express.json());
mongoose
  .connect(process.env.DB_URL)
  .then(console.log("connected to DB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/employee", employeeRoute);
app.listen("4000", () => {
  console.log("backend is runnings");
});
