import { DELETE_TODO } from './action_constants';

function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}

export default deleteTodo;
