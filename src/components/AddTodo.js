import React from 'react';

export default class AddTodo extends React.Component {
  state = {
    error: undefined
  };
  getRandomId() {
    return Math.round(Math.random() * 10000000)
  }
  handleAddTodo = (e) => {
    e.preventDefault();
    const todo =
    {
      todoId: this.getRandomId(),
      todoName: e.target.elements.todoName.value.trim(),
      todoDescription: e.target.elements.todoDescription.value.trim()
    }
    const error = this.props.handleAddTodo(todo);

    console.log(todo);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.todoName.value = '';
      e.target.elements.todoDescription.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-todo-error">{this.state.error}</p>}
        <form className="add-todo" onSubmit={this.handleAddTodo}>
        <div>         
          <div className="add-todo__item">
            <h4>Todo: </h4>
            <input className="add-todo__input" type="text" name="todoName" />
          </div>
          <div className="add-todo__item">
            <h4>Description: </h4>
            <input className="add-todo__input" type="text" name="todoDescription" />            
          </div>
          </div>      
          <button className="button">Add Todo</button>    
        </form>
        
      </div>
    );
  }
}
