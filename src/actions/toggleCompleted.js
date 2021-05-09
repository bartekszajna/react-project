import { TOGGLE_COMPLETED } from './action_constants';

function toggleCompleted(id) {
  return {
    type: TOGGLE_COMPLETED,
    payload: id,
  };
}

export default toggleCompleted;
