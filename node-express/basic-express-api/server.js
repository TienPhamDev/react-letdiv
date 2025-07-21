const express = require("express");
const app = express();
const PORT = 5200;

app.get("/", (req, res) => {
  res.send("Hello, World!Toi  la manh tien6");
});

app.listen(PORT, () => {
  console.log(`Server listenning at port ${PORT}`);
});

app.use(express.json());

let todos = [
  { id: 1, title: "Học React", completed: false },
  { id: 2, title: "Làm bài tập Redux", completed: true },
  { id: 3, title: "Thực hành gọi API", completed: false },
];
let nextId = 4;

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find((item) => item.id === todoId);

  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ message: `Todo with Id ${todoId} not found` });
  }
});

app.post("/todos", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Tittle is required" });
  }
  const newTodo = {
    id: nextId++,
    title: title,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);
  const { title, completed } = req.body;

  if (title === undefined || completed === undefined) {
    return res
      .status(400)
      .json({ message: "tittle and completed are required for PUT" });
  }
  if (typeof completed !== "boolean") {
    return res.status(400).json({ message: "Completed must be a boolean" });
  }

  const todoIndex = todos.findIndex((x) => x.id === todoId);
  if (todoIndex === -1) {
    return res
      .status(404)
      .json({ message: `TodoIndex ${todoIndex} not found` });
  }
  const updateTodo = {
    id: todoId,
    title: title,
    completed: completed,
  };
  todos[todoIndex] = updateTodo;
  res.status(200).json(updateTodo);
});

app.delete("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex((x) => {
    return x.id === todoId;
  });
  if (todoIndex === -1) {
    return res
      .status(404)
      .json({ message: `Todo index ${todoIndex} not found` });
  }
  todos.splice(todoIndex, 1);
  res.status(204).send();
});
