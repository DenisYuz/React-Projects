import React from 'react';

const Todo = (props) => (
  <div className="todo">
    <p className="todo__text"
      onClick={(e) => {
        props.handleDisplayTodoDetails(props.todo.todoId);
      }} >{props.count}. {props.todo.todoName}</p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteTodo(props.todo.todoId);
      }}
    >
      remove
      </button>
  </div>
);

export default Todo;
