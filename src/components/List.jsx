import React from "react";

const List = ({
  title,
  id,
  deleteItem,
  editTodo,
  edit,
  value,
  setValue,
  saveEditTodo,
}) => {
  const editTodoTitle = () => {
    editTodo(id, title);
  };
  return (
    <li className="todo">
      <label>
        <input type="checkbox" />
        {edit == id ? (
          <div>
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              type="text"
            />
          </div>
        ) : (
          <span>{title}</span>
        )}
        {edit == id ? (
          <div>
            <button onClick={() => saveEditTodo(id)}>Save</button>
          </div>
        ) : (
          <div>
            <button onClick={() => deleteItem(id)}>delete</button>
            <button onClick={editTodoTitle}>edit</button>
          </div>
        )}
      </label>
    </li>
  );
};

export default List;
