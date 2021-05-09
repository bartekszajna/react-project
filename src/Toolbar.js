import React from 'react';
import AddTaskForm from './AddTaskForm';
import SelectInput from './SelectInput';

function Toolbar() {
  return (
    <div className='toolbar'>
      <AddTaskForm />
      <SelectInput />
    </div>
  );
}

export default Toolbar;
