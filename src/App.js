import React, { useState } from 'react';

function App() {
  // Use the useState hook to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (task) => {
    // Create a new task object
    const newTask = {
      text: task,
      completed: false,
    };

    // Add the new task to the list of tasks
    setTasks([...tasks, newTask]);
  };

  // Function to remove a task
  const removeTask = (index) => {
    // Create a new array of tasks without the task at the specified index
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    // Update the list of tasks
    setTasks(newTasks);
  };

  // Function to mark a task as complete
  const completeTask = (index) => {
    // Create a new array of tasks with the task at the specified index marked as complete
    const newTasks = [...tasks];
    newTasks[index].completed = true;

    // Update the list of tasks
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To-Do App</h1>
      {/* Form to add a new task */}
      <form
        onSubmit={(event) => {
          // Prevent the default form submission behavior
          event.preventDefault();

          // Get the value of the input field
          const task = event.target.elements.task.value;

          // Add the new task
          addTask(task);

          // Clear the input field
          event.target.elements.task.value = '';
        }}
      >
        <input type="text" name="task" placeholder="Enter a new task" />
        <button type="submit">Add Task</button>
      </form>

      {/* List of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {/* Checkbox to mark the task as complete */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => completeTask(index)}
            />
            {/* Task text */}
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            {/* Button to remove the task */}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;