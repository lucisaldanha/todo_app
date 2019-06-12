import React from 'react';
import './App.css';
import TodoItem from './TodoItem.js';
import todoData from './todoData';


function App() {
	const todoItemComponents = todoData.map(dataItem => { 
		return <TodoItem key={dataItem.id} texto={dataItem.text} completo={dataItem.completed} />
	})
  return (
    <div className = "list">
    	{todoItemComponents}    	    	
    </div>    
  )
}

export default App;
