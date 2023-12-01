import fs from "fs/promises";

export const setup = () => {
  fs.access("./todos.json")
    .then()
    .catch(() => fs.writeFile("./todos.json", "[]"));
};

export const getAllTodos = () => {
  return fs
    .readFile("./todos.json", { encoding: "utf8" })
    .then((data) => JSON.parse(data))
    .catch((err) => console.log(err, "fheler"));
};

export const createTodo = (todo) => {
  getAllTodos()
    .then((data) => {
      data.push(todo);
      return data;
    })
    .then((newArray) => fs.writeFile("./todos.json", JSON.stringify(newArray)));
};

export const deleteTodo = (id) => {
  getAllTodos()
    .then((todos) => todos.filter((todo) => todo.id !== id))
    .then((data) => fs.writeFile("./todos.json", JSON.stringify(data)));
};

export const changeStatus = (todoID) => {
  getAllTodos()
    .then((dataArray) => {
      let changeThis = dataArray.filter((elt, index) => {
        return elt.id === todoID;
      });

      changeThis[0].status = "done";

      dataArray.splice(
        dataArray.findIndex((val) => val === changeThis[0]),
        1,
        changeThis[0]
      );
      return dataArray;
    })
    .then((newArray) => fs.writeFile("./todos.json", JSON.stringify(newArray)));
};
