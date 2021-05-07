import React from 'react';

function SelectInput({ filter, filterHandler }) {
  return (
    <select
      className='select_input'
      value={filter}
      onChange={(e) => filterHandler(e.target.value)}
    >
      <option value='all'>All</option>
      <option value='completed'>Completed</option>
      <option value='incompleted'>Incompleted</option>
    </select>
  );
}

export default SelectInput;
