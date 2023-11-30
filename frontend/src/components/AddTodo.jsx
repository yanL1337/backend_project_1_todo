import { useEffect, useRef, useState } from "react";

const AddTodo = ({ setRefresher }) => {
  let todoInput = useRef();
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setCount((count) => count + 1);
    let todoObj = {
      id: count,
      content: todoInput.current.value,
      status: "not done",
    };

    fetch("http://localhost:1337/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todoObj),
    }).then((res) => {
      if (res.ok) setRefresher((prev) => !prev), (todoInput.current.value = "");
    });
  };
  return (
    <div>
      <input ref={todoInput} type="text" placeholder="Bitte ToDo eingeben..." />
      <button onClick={addTodo}>+</button>
    </div>
  );
};

export default AddTodo;
