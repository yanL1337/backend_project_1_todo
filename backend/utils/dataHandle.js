import fs from "fs/promises";

export const setup = () => {
  fs.access("./todos.json")
    .then()
    .catch((err) => fs.writeFile("./todos.json", "[]"));
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

export const changeStatus = (todoID, newStatus) => {
  getAllTodos()
    .then((dataArray) => {
      let ind;
      let changeThis = dataArray.filter((elt, index) => {
        ind = index;
        return elt.id === todoID;
      });

      changeThis[0].status = newStatus;
      dataArray.splice(ind, 1, changeThis[0]);
      return dataArray;
    })
    .then((newArray) => fs.writeFile("./todos.json", JSON.stringify(newArray)));
};
