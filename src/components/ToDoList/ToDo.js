import React from "react";
import ToDoItem from "./ToDoItem";
import todoData from "./todoData";

class ToDo extends React.Component {

  constructor(){
    super()
    this.state = {
      todos: todoData
    }
  }
  render(){

  const todoItems = this.state.todos.map((item)=>{
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
        )}
}

export default ToDo;