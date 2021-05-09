import { SET_FILTER } from './action_constants';

function setFilter(value) {
  return {
    type: SET_FILTER,
    payload: value,
  };
}

export default setFilter;
