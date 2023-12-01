const TodoItem = ({ todo, setRefresher }) => {
  // ;

  const deleteItem = (event) => {
    const id = { id: event.target.value };

    fetch("http://localhost:1337/", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(id),
    }).then((res) => (res.ok ? setRefresher((prev) => !prev) : ""));
  };

  const changeStatus = (event) => {
    const id = { id: event.target.value };

    fetch("http://localhost:1337/", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(id),
    }).then((res) => (res.ok ? setRefresher((prev) => !prev) : ""));
  };

  return (
    <div className="bg-slate-300 rounded-lg flex justify-between">
      <div>
        <p>{todo.content}</p>
        <p>{todo.status}</p>
      </div>
      <div className="flex flex-col">
        <button className="text-lg" value={todo.id} onClick={deleteItem}>
          X
        </button>
        <button className="text-lg" value={todo.id} onClick={changeStatus}>
          O
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
