import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todos, setTodos }) {
  const onDeleteHander = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(newTodos);
  };
  const onEditHander = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };
  return (
    <div className="list-box">
      <h2>Working.. 🔥</h2>
      <div className="work-list">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return <Todo onDeleteHander={onDeleteHander} onEditHander={onEditHander} todo={todo} key={todo.id} setTodos={setTodos} />;
          } else {
            return null;
          }
        })}
      </div>
      <h2>Done..! 🎉</h2>
      <div className="work-list">
        {todos.map((todo) => {
          if (todo.isDone) {
            return <Todo todo={todo} key={todo.id} setTodos={setTodos} onEditHander={onEditHander} onDeleteHander={onDeleteHander} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;