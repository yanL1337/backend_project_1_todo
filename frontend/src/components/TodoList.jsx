import TodoItem from "./TodoItem";

const TodoList = ({ todos, setRefresher }) => {
  return (
    <section className="grid grid-cols-5 gap-5">
      {todos.map((todo, key) => {
        return <TodoItem setRefresher={setRefresher} todo={todo} key={key} />;
      })}
    </section>
  );
};

export default TodoList;
