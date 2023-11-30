import { useEffect, useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [refresher, setRefresher] = useState(false);

  useEffect(() => {
    fetch("http://localhost:1337/")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err, "fehlellr"));
    // console.log(refresher);
  }, [refresher]);

  const howMany = () => {
    return todos.filter((todo) => {
      return todo.status === "undone";
    }).length;
  };
  return (
    <main>
      <h1>Unerledigte Aufgaben: {howMany()}</h1>
      <AddTodo setRefresher={setRefresher} />
      <TodoList todos={todos} setRefresher={setRefresher} />
    </main>
  );
};

export default Home;
