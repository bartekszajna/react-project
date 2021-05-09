import { ADD_TODO } from './action_constants';

function addTodo(input) {
  return {
    type: ADD_TODO,
    payload: input,
  };
}

export default addTodo;
