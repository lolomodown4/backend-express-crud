const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    isDone: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
