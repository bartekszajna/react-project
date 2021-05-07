import React, { useState, useEffect } from 'react';
import Header from './Header';
import Toolbar from './Toolbar';
import List from './List';

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (localStorage.length <= 1) {
      return;
    }

    if (localStorage.getItem('filter')) {
      setFilter(localStorage.getItem('filter'));
    }

    let tasksList = [];
    Object.keys(localStorage).forEach((key) => {
      if (key === 'filter') return;
      tasksList.push(JSON.parse(localStorage.getItem(key)));
    });

    setTasksList(tasksList);
  }, []);

  useEffect(() => {
    localStorage.setItem('filter', filter);
  }, [filter]);

  function completeHandler(id) {
    setTasksList((tasksList) => {
      return tasksList.map((task) => {
        if (task.id === id) {
          const obj = { ...task, completed: !task.completed };
          localStorage.setItem(task.id, JSON.stringify(obj));
          return obj;
        } else {
          return task;
        }
      });
    });
  }

  return (
    <>
      <Header />
      <Toolbar
        submitHandler={setTasksList}
        filterHandler={setFilter}
        filter={filter}
      />
      {filter === 'all' ? (
        <List tasksList={tasksList} completeHandler={completeHandler} />
      ) : filter === 'completed' ? (
        <List
          completeHandler={completeHandler}
          tasksList={tasksList.filter((task) => task.completed)}
        />
      ) : (
        <List
          completeHandler={completeHandler}
          tasksList={tasksList.filter((task) => !task.completed)}
        />
      )}
    </>
  );
}

export default App;
