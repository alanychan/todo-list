import React from "react";
import "./TodoItem.css";

// function ToDoItem({todo})

//props - (properies) is an object 
//assign todo to a const

function ToDoItem(props){
    const { todo, index, completeToDo, incompleteToDo, removeToDo } = props;

    return (
        <div className={`todo ${todo.isCompleted ? "complete" : "" }`}>
        {todo.text}
        <div>
            {todo.isCompleted ? (
                <button onClick={() =>  incompleteToDo(index)}>Incomplete</button>
            )
            : (
                <button onClick={() =>  completeToDo(index)}>Complete</button>
            )
            }
            <button onClick={() => removeToDo(index)}>x</button>
        </div>

        {/* <div>
            <button onClick={() =>  completeToDo(index)}>Complete</button>
            <button onClick={() =>  incompleteToDo(index)}>Incomplete</button>
            <button onClick={() => removeToDo(index)}>x</button>
        </div> */}
        </div>
    );
}

export default ToDoItem;