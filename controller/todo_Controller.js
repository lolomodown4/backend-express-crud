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
    console.log(req.body);
    const addedTodo = await Todo.create(req.body);
    res.status(201).json(addedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const findSpecificTodo = await Todo.find({ title: id });

    res.status(200).json(findSpecificTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await Todo.deleteOne({ _id: id });

    const dataLeft = await Todo.find({});
    res.status(200).json(dataLeft);
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
