import React from 'react';
import Modal from 'react-modal';

const TodoModal = (props) => (
  <Modal
    isOpen={!!props.selectedTodo}
    onRequestClose={props.handleClearSelectedTodon}
    contentLabel="Selected Todo"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Todo</h3>
    {props.selectedTodo && <p className="modal__body">{props.selectedTodo.todoName}</p>}
    <button className="button" onClick={props.handleClearSelectedTodo}>Okay</button>
  </Modal>
);

export default TodoModal;
