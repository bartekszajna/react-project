import React from 'react';
import AddTaskForm from './AddTaskForm';
import SelectInput from './SelectInput';

function Toolbar({ submitHandler, filter, filterHandler }) {
  return (
    <div className='toolbar'>
      <AddTaskForm submitHandler={submitHandler} />
      <SelectInput filterHandler={filterHandler} filter={filter} />
    </div>
  );
}

export default Toolbar;
