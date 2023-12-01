import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";

const AddTodo = ({ setRefresher }) => {
  let todoInput = useRef();

  const addTodo = () => {
    let todoObj = {
      id: v4(),
      content: todoInput.current.value,
      status: "undone",
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
