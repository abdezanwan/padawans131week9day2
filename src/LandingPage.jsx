import React from 'react';

function LandingPage({ todos, addTodo, removeTodo, newTodo, setNewTodo }) {
  return (
    <div className="landing-page">
      <h1>To-DO</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LandingPage;
