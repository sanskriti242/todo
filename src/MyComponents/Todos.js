import React from "react";
import { TodoItem } from "../MyComponents/TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    // margin: "10px auto",
  };
  return (
    <div className="container my-5" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
                <hr />
              </>
            );
          })}
      {/* props.x where x is something coming from app.js */}
      {/* todos is name of array in app.js todo is at a instance todo  */}
    </div>
  );
};
