import React, { useState } from "react";
import List from "./List";

const Dairy = ({
  todos,
  deleteItem,
  editTodo,
  edit,
  value,
  setValue,
  saveEditTodo,
}) => {
  return (
    <div>
      <ul>
        {todos.map((elem) => (
          <List
            editTodo={editTodo}
            deleteItem={deleteItem}
            edit={edit}
            value={value}
            setValue={setValue}
            saveEditTodo={saveEditTodo}
            key={elem.id}
            {...elem}
          />
        ))}
      </ul>
    </div>
  );
};

export default Dairy;
