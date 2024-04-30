const Todo = require("../model/todo.model");
const getAllTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find();

    res.status(200).json(allTodos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTodo = async (req, res) => {
  try {
    const addedTodo = await Todo.create(req.body);
    res.status(201).json(addedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTodos,
  addTodo,
};
