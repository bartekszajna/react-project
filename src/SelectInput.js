import React from 'react';
import store from './store';
import setFilter from './actions/setFilter';

function SelectInput() {
  function changeHandler(e) {
    store.dispatch(setFilter(e.target.value));
  }

  return (
    <select
      className='select_input'
      onChange={(e) => changeHandler(e)}
      value={store.getState().filter}
    >
      <option value='all'>All</option>
      <option value='completed'>Completed</option>
      <option value='incompleted'>Incompleted</option>
    </select>
  );
}

export default SelectInput;
