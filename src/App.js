import React from 'react';
import './App.css';
import TodoItem from './TodoItem.js';

function App() {
  return (
    <div className = "list">
    	<TodoItem />
    	<TodoItem />
     	<TodoItem />
    	<TodoItem />
    </div>    
  )
}

export default App;
