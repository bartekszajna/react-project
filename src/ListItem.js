import React from 'react';

const ListItem = ({ task, completeHandler }) => {
  return (
    <li>
      <div className='task_item'>
        <h3 className='item_header'>{task.task}</h3>

        <input
          onChange={() => completeHandler(task.id)}
          type='checkbox'
          className='complete_checkbox'
          checked={task.completed}
        />

        <button className='delete_button'>
          <span className='sr-only'>Delete task</span>
        </button>
      </div>
    </li>
  );
};

export default ListItem;
