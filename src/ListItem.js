import React from 'react';
import store from './store';
import toggleCompleted from './actions/toggleCompleted';
import deleteTodo from './actions/deleteTodo';

const ListItem = ({ todo }) => {
  function completeHandler(id) {
    store.dispatch(toggleCompleted(id));
  }

  function deleteHandler(id) {
    store.dispatch(deleteTodo(id));
  }

  return (
    <li>
      <div className='task_item'>
        <h3 className='item_header'>{todo.title}</h3>

        <input
          type='checkbox'
          className='complete_checkbox'
          checked={todo.completed}
          onChange={() => completeHandler(todo.id)}
        />

        <button
          className='delete_button'
          onClick={() => deleteHandler(todo.id)}
        >
          <span className='sr-only'>Delete task</span>
        </button>
      </div>
    </li>
  );
};

export default ListItem;
