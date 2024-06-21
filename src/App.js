import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './tasksSlice';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);
  const taskStatus = useSelector((state) => state.tasks.status);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Task List</h1>
      {taskStatus === 'loading' && <p>Loading...</p>}
      {taskStatus === 'succeeded' && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} {task.completed ? '(Completed)' : '(Pending)'}
            </li>
          ))}
        </ul>
      )}
      {taskStatus === 'failed' && <p>Failed to load tasks.</p>}
    </div>
  );
}

export default App;
