import React from 'react';
import Addtodo from './AddTodo';
import Action from './Action';
import Header from './Header';
import Todos from './Todos';
import TodoModal from './todoModal';
import TodoDetails from './TodoDetails'

export default class TodosApp extends React.Component {
  state = {
    todos: [{
      todoId: "", todoName: "", todoDescription: ""
    }],
    selectedTodo: undefined
  };
  handleDeleteTodos = () => {
    this.setState(() => ({ todos: [] }));
  };
  handleClearSelectedTodo = () => {
    this.setState(() => ({ selectedTodo: undefined }));
  }
  handleDeleteTodo = (todoIdToRemove) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todoIdToRemove !== todo.todoId)
    }));
  };
  handleDisplayTodoDetails = (todoIdToDisplay) => {
    const todo = this.state.todos.filter((todo) => todoIdToDisplay === todo.todoId);
    this.setState((prevState) => ({
      selectedTodo: todo[0]
    }));
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.todos.length);
    const todo = this.state.todos[randomNum];
    this.setState(() => ({
      selectedTodo: todo[0]
    }));
  };
  handleAddTodo = (todo) => {
    if (!todo.todoId || !todo.todoName) {
      return 'Enter valid value to add item';
    } else if (this.state.todos.indexOf(todo) > -1) {
      return 'This todo already exists';
    }

    this.setState((prevState) => ({
      todos: prevState.todos.concat(todo)
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('todos');
      const todos = JSON.parse(json);

      if (todos) {
        this.setState(() => ({ todos }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      const json = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    const subtitle = 'Created by Denis Yuzhelevsky';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <TodoDetails selectedTodo={this.state.selectedTodo} />
          <div className="widget">
            <Todos
              todos={this.state.todos}
              handleDeleteTodos={this.handleDeleteTodos}
              handleDeleteTodo={this.handleDeleteTodo}
              handleDisplayTodoDetails={this.handleDisplayTodoDetails}
            />
            <Addtodo
              handleAddTodo={this.handleAddTodo}
            />
          </div>
        </div>
        {/*<TodoModal
          selectedTodo={this.state.selectedTodo}
        handleClearSelectedTodo={this.handleClearSelectedTodo}*/}
        />
      </div>
    );
  }
}
