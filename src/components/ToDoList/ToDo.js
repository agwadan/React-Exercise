import React from "react";
import ToDoItem from "./ToDoItem";
import todoData from "./todoData";

function ToDo(){

  const todoItems = todoData.map((item)=>{
    return(
    <ToDoItem 
      key={item.id}
      item={item}
    />)
  })
    return(
        <div className="todo-list">
          {todoItems}
          </div>
        )
}

export default ToDo;