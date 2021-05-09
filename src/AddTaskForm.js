import React, { useState } from 'react';
import store from './store';
import addTodo from './actions/addTodo';
import setFilter from './actions/setFilter';

const AddTaskForm = () => {
  const [input, setInput] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    if (!input) {
      return;
    }

    store.dispatch(addTodo(input));

    store.dispatch(setFilter('all'));

    setInput('');
  }

  function changeHandler(e) {
    setInput(e.target.value);
  }

  return (
    <form className='addtask_form' onSubmit={(e) => submitHandler(e)}>
      <input
        type='text'
        className='form_input'
        onChange={(e) => {
          changeHandler(e);
        }}
        value={input}
      />
      <button className='submit_button'>
        <span className='sr-only'>Add task</span>
      </button>
    </form>
  );
};

export default AddTaskForm;
