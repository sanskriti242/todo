import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []; //if null then set empty
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos")); //else todos ke item ko leaaenge
  }
  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    // deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      //creating an object
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  }; //creating an array and adding this todo
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); //local storage me new todos will be saved whenever any change is made on todo
  }, [todos]); //whenever change is made on todos call this method otherwise if we add a todo then delete then reload all todos do not appear
  localStorage.setItem("todos", JSON.stringify(todos)); //saving todos

  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <div>{x}</div>
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <div>{x}</div>
    //   </header>
    //   <div>{x}</div>
    // </div>
  );
}

export default App;
