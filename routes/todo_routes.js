const express = require("express");

const router = express.Router();

const {
  getAllTodos,
  addTodo,
  findTodo,
  deleteTodo,
  editedTodo,
} = require("../controller/todo_Controller");

router.route("/").get(getAllTodos).post(addTodo);

router.route("/:id").get(findTodo).delete(deleteTodo).put(editedTodo);

module.exports = router;
