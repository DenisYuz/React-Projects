import React from 'react';

const TodoDetails = (props) => {
    return (
        <div>
            <form>
                <p type="text" className="header__subtitle" onClick={props.handleDisplayTodoDetails}>Todo Details </p>
                {props.selectedTodo && <p className="todo__label">Todo: {props.selectedTodo.todoName}</p>}
                {props.selectedTodo && <p className="todo__label">Description:  {props.selectedTodo.todoDescription}</p>}
            </form>
        </div>
    );
}

export default TodoDetails
