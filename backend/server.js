import express from "express";
import {
  changeStatus,
  createTodo,
  deleteTodo,
  getAllTodos,
  setup,
} from "./utils/dataHandle.js";
import cors from "cors";

const PORT = 1337;
const server = express();

server.use(cors());
server.use(express.json());

setup();

server.get("/", (req, res) => {
  getAllTodos()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err, "fehler"));
});

server.post("/", (req, res) => {
  const todo = req.body;
  createTodo(todo);
  res.end();
});

server.delete("/", (req, res) => {
  const todo = req.body;
  deleteTodo(todo.id);
  res.end();
});

server.put("/", (req, res) => {
  const status = req.body;
  changeStatus(status.id, status.status);
  res.end();
});

server.listen(PORT, () => console.log("Rennt"));
