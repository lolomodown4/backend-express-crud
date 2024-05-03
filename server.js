const express = require("express");
const app = express();

const dotenv = require("dotenv").config();

const cors = require("cors");

const dbConnection = require("./config/db_Connection");

dbConnection();

const bodyParser = require("body-parser");
/* app.use(bodyParser.urlencoded({ extended: false })); */

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "this is home page" });
  /* redirect */
});

const todoRoutes = require("./routes/todo_routes");

app.use("/todo", todoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
