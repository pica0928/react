import React from "react";
import "./style.css";
function Todo({ todo, onDeleteHander, onEditHander }) {
  return (
    <div className="list-container">
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div className="todo-body">{todo.body}</div>
      </div>
      <div className="button-container">
        <button className="todo-delete-btn" onClick={() => onDeleteHander(todo.id)}>
          삭제하기
        </button>
        <button className="todo-complete-btn" onClick={() => onEditHander(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}
export default Todo;