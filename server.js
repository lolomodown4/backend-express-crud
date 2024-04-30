const express = require("express");

const app = express();

const dotenv = require("dotenv").config();

const dbConnection = require("./config/db_Connection");

dbConnection();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "this is home page" });
  /* redirect */
});

const todoRoutes = require("./routes/todo_routes");

app.use("/todo", todoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
