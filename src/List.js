import React from 'react';
import ListItem from './ListItem';
const List = ({ tasksList, completeHandler }) => {
  return (
    <ul>
      {tasksList.map((task) => (
        <ListItem key={task.id} task={task} completeHandler={completeHandler} />
      ))}
    </ul>
  );
};

export default List;
