import React from 'react';
import Todo from './Todo';

const Todos = (props) => (
  <div>
    <div className="widget-header">
      <h3 onClick={props.handleDisplayTodoDetails} className="widget-header__title">Your Todos</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteTodos}
      >
        Remove All
    </button>
    </div>

    {props.todos.length === 0 && <p className="widget__message">Please add Todo to get started!</p>}
    {
      props.todos.map((todo, index) => (
        <Todo
          key={todo.todoId}
          todo={todo}
          count={index + 1}
          handleDeleteTodo={props.handleDeleteTodo}
          handleDisplayTodoDetails={props.handleDisplayTodoDetails}
        />
      ))
    }
  </div>
);

export default Todos;
