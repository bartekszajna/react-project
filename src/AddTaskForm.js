import React, { useState } from 'react';

const AddTaskForm = ({ submitHandler }) => {
  const [input, setInput] = useState('');

  function pushToStorage(task) {
    localStorage.setItem(task.id, JSON.stringify(task));
  }

  function submitTask(e) {
    e.preventDefault();
    if (!input) {
      return;
    }

    let task = {};

    submitHandler((tasksList) => {
      task = {
        task: input,
        completed: false,
        id: tasksList.length,
      };

      return [...tasksList, task];
    });

    pushToStorage(task);

    setInput('');
  }

  return (
    <form className='addtask_form' onSubmit={submitTask}>
      <input
        type='text'
        className='form_input'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button className='submit_button'>
        <span className='sr-only'>Add task</span>
      </button>
    </form>
  );
};

export default AddTaskForm;
