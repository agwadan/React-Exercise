import React from 'react';

const ToDoItem = (props) => {
    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}></input>
            <p> {props.item.task} </p>
        </div>
    )
}

export default ToDoItem