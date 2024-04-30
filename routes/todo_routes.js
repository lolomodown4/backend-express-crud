const express = require("express");

const router = express.Router();
const Todo = require("../model/todo.model");
const { getAllTodos, addTodo } = require("../controller/todo_Controller");

router.route("/").get(getAllTodos).post(addTodo);

router.get("/:title", async (req, res) => {
  try {
    const getTodo = Todo.find({ title: req.params.title });

    res.status(200).json(getTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
