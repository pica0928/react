import React, { useState } from "react";
import "./style.css";

function Form({ setTodos, todos }) {
  //TodoList에서 받아온 props todos=초기값
  const initState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  const [todo, setTodo] = useState(initState); //todo를 initState로 초기값 만듬
  const onChangeHandler = (event) => {
    // console.log(event.target) //<input></input> 태그들이 나온다
    const { name, value } = event.target;
    // console.log(name, value); //input의 name과 value 값이나온다
    setTodo({ ...todo, [name]: value, id: todos.length + 1 });
    console.log(todo); // object로 나옴 새로운객체로
  };
  // const btn = document.querySelector(".input-btn");
  // btn.addEventListener("submit", (event) => onSubmitHandler);

  const onSubmitHandler = (event) => {
    console.log(event);
    event.preventDefault(); //reroad 중지 input전송중지
    setTodos([...todos, todo]); //todo를 추가 객체로만듬
    setTodo(initState); // 기본상태로 저장 todo객체
  };

  return (
    <form className="form">
      <div className="input-group">
        <label className="label-name">제목</label>
        <input value={todo.title} name="title" onChange={onChangeHandler} className="input-text input-body" type="text" />
        <label className="label-name">내용</label>
        <input value={todo.body} name="body" onChange={onChangeHandler} className="input-text" type="text" />
      </div>
      <button onClick={onSubmitHandler} type="submit" className="input-btn">
        추가하기
      </button>
    </form>
    // onSubmit={onSubmitHandler}
  );
}
export default Form;