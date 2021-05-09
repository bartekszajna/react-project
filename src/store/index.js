import { createStore } from 'redux';
import reducer from '../reducers';

function getStorageState() {
  if (!localStorage.getItem('todos')) {
    return undefined;
  } else {
    return { todos: JSON.parse(localStorage.getItem('todos')), filter: 'all' };
  }
}

const initialState = getStorageState();

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
