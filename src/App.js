import React, { useEffect, useState } from "react";
import Dairy from "./components/Dairy";
import List from "./components/List";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        title: todoTitle,
        id: Date.now(),
      },
    ]);
    setTodoTitle("");
  };

  //  ! READ
  useEffect(() => {
    const data = localStorage.getItem("todos");
    JSON.stringify(data);
    setTodos(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ! DELETE
  const deleteItem = (id) => {
    const updateTodos = todos.filter((elem) => elem.id !== id);
    setTodos(updateTodos);
  };

  // ! EDIT
  const editTodo = (id, value) => {
    setEdit(id);
    setValue(value);
  };
  const saveEditTodo = (id) => {
    const newTodo = todos.map((elem) => {
      if (elem.id == id) {
        elem.title = value;
      }
      return elem;
    });
    setTodos(newTodo);
    setEdit(null);
  };
  return (
    <div>
      <div className="container">
        <h1>Todo app</h1>
        <div className="input-field">
          <form onSubmit={addTodo}>
            <input
              onChange={(e) => {
                setTodoTitle(e.target.value);
              }}
              value={todoTitle}
              type="text"
            />
            <p>Todo name</p>
          </form>
        </div>
      </div>
      <Dairy
        edit={edit}
        editTodo={editTodo}
        deleteItem={deleteItem}
        todos={todos}
        value={value}
        setValue={setValue}
        saveEditTodo={saveEditTodo}
      />
    </div>
  );
};

export default App;
