import {
  ADD_TODO,
  DELETE_TODO,
  SET_FILTER,
  TOGGLE_COMPLETED,
} from '../actions/action_constants';

function reducer(state = { todos: [], filter: 'all' }, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.round(Math.random() * 100000),
            title: action.payload,
            completed: false,
          },
        ],
      };
    }

    case DELETE_TODO: {
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    }

    case TOGGLE_COMPLETED: {
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload) {
              return { ...todo, completed: !todo.completed };
            }
            return todo;
          }),
        ],
      };
    }

    case SET_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
