const TodoItem = ({ todo, setRefresher }) => {
  setRefresher((prev) => !prev);
  return (
    <div>
      <p>{todo.id}</p>
      <p>{todo.content}</p>
      <p>{todo.status}</p>
    </div>
  );
};

export default TodoItem;
