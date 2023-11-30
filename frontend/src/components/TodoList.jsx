import TodoItem from "./TodoItem";

const TodoList = ({ todos, setRefresher }) => {
  return (
    <section>
      {todos.map((todo, key) => {
        return <TodoItem setRefresher={setRefresher} todo={todo} key={key} />;
      })}
    </section>
  );
};

export default TodoList;
