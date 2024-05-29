import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [filter, setFilter] = useState('all');
  console.log('tasks', tasks);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, status: 'pending' }]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const startEditTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
  };

  const saveEditTask = () => {
    const updatedTasks = tasks.map((task, index) =>
      index === editIndex ? { ...task, text: editText } : task
    );
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditText('');
  };

  const updateTaskStatus = (index, status) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    filter === 'all' ? true : task.status === filter
  );
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className={styles.mainTodoAPp}>
        <h1>ToDo App</h1>
        <div className={styles.formSec}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className={styles.addButton} onClick={addTask}>
            Add Task
          </button>
        </div>
        <div className={styles.filterButtons}>
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={filter === 'pending' ? 'active' : ''}
            onClick={() => setFilter('pending')}
          >
            Pending
          </button>
          <button
            className={filter === 'in-progress' ? 'active' : ''}
            onClick={() => setFilter('in-progress')}
          >
            In Progress
          </button>
          <button
            className={filter === 'completed' ? 'active' : ''}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
        <ul className={styles.taskList}>
          {filteredTasks.map((task, index) => (
            <li className={styles.taskItem} key={index}>
              {editIndex === index ? (
                <>
                  <input
                    className={styles.editInput}
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button className={styles.saveButton} onClick={saveEditTask}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  {task.text} - <em>{task.status}</em>
                  <button
                    className={styles.removeButton}
                    onClick={() => removeTask(index)}
                  >
                    Remove
                  </button>
                  <button
                    className={styles.editButton}
                    onClick={() => startEditTask(index)}
                  >
                    Edit
                  </button>
                  {task.status !== 'in-progress' && (
                    <button
                      className={`${styles.statusButton} ${styles.inProgress}`}
                      onClick={() => updateTaskStatus(index, 'in-progress')}
                    >
                      Start
                    </button>
                  )}
                  {task.status !== 'completed' && (
                    <button
                      className={`${styles.statusButton} ${styles.completed}`}
                      onClick={() => updateTaskStatus(index, 'completed')}
                    >
                      Complete
                    </button>
                  )}
                  {task.status !== 'pending' && (
                    <button
                      className={`${styles.statusButton} ${styles.pending}`}
                      onClick={() => updateTaskStatus(index, 'pending')}
                    >
                      Revert to Pending
                    </button>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
