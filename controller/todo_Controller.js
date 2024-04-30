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

const findTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const findSpecificTodo = await Todo.find({ id: id });

    res.status(200).json(findSpecificTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteThis = await Todo.deleteOne({ id: id });
    res.status(200).json(deleteThis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editedTodo = async (req, res) => {
  try {
    const { id } = req.params;

    updatedValue = req.body;

    const updatedTodo = await Todo.findOneAndUpdate({ id: id }, updatedValue, {
      returnOriginal: false,
    });
    res.status(201).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTodos,
  addTodo,
  findTodo,
  deleteTodo,
  editedTodo,
};
