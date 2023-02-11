import React, { useState } from "react";

//Components
import ToDoForm from "./components/TodoForm/ToDoForm";
import ToDoItem from "./components/TodoItem/ToDoItem";
import "./App.css";

function App(){
  //State
  //
  //array of objects
  const [todos, setTodos] = useState([
    //creating object: properties: text, isCompleted
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  //Actions
  // assigning the value to the const
  // ... means expands the array newTodos with the arry todos
  // change text to { text } // curly brackets convert to object
  const addTodo = (text) => {
    // const newTodos = [...todos, { text }];
    const newTodos = [...todos, { text:text, isCompleted: false }];
    setTodos(newTodos); //set the State
  };


  const completeToDo = (index) =>{
    const newTodos = [...todos]; //create a new array by copying the state
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeToDo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };


  const incompleteToDo = (index) => {
    const newTodos = [...todos]; 
    newTodos[index].isCompleted = false;
    setTodos(newTodos);
  }

  const updateRank = (index, newRanking) => {
    const newTodos = [...todos];
    newTodos[index].ranking = newRanking;
    newTodos.sort((todoA, todoB) => {
      return todoA.ranking - todoB.ranking;
    });
    setTodos(newTodos);
  };

/*
passing the functions to the child toDoItem
-add completeTodo next to the function ToDoItem
*/
  return ( 
    <div className="app">
      <div className="todo-list">
        <h1>My ToDo List</h1>
        {todos.map((todo, index) => (
          <ToDoItem key={index} 
          todo={todo} 
          index={index} 
          completeToDo={completeToDo}
          incompleteToDo={incompleteToDo}  
          removeToDo={removeToDo}
          />
        ))}
        <ToDoForm addTodo={addTodo}/> {/* passing the array addTodo to the props. */}
      </div>
    </div>
  );
}

export default App;
