import React from 'react';
import ListItem from './ListItem';
import store from './store';

const List = () => {
  const filter = store.getState().filter;
  const todosList = store.getState().todos;

  const todosToRender =
    filter === 'all'
      ? todosList
      : filter === 'completed'
      ? todosList.filter((todo) => todo.completed)
      : todosList.filter((todo) => !todo.completed);
  return (
    <ul>
      {todosToRender.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default List;
