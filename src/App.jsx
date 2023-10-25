import React, { useState } from 'react';
import './App.css';
import LandingPage from './LandingPage';


function App() {
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState(''); 


  
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo(''); // 
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <LandingPage todos={todos} addTodo={addTodo} removeTodo={removeTodo} newTodo={newTodo} setNewTodo={setNewTodo} />
    </div>
  );
}


export default App;
