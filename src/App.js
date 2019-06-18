import React from 'react';
import './App.css';
import TodoItem from './TodoItem.js';
import todoData from './todoData';

class App extends React.Component {
	constructor() {
		super()
		this.state={
			todos: todoData
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(id) {
		console.log("Changed!", id)
	}

	render() {
		const todoItemComponents = this.state.todos.map(todoItem => { 
			return <TodoItem 
						key={todoItem.id} 
						id={todoItem.id}
						texto={todoItem.text}
						completo={todoItem.completed}
						handleChange={this.handleChange}
					/>
			})
		return (
		    <div className = "list">
		    	{todoItemComponents}    	    	
		    </div>    
  		)
	}
}

export default App;



// function App() {
// 	const todoItemComponents = todoData.map(dataItem => { 
// 		return <TodoItem key={dataItem.id} texto={dataItem.text} completo={dataItem.completed} />
// 	})
//   return (
//     <div className = "list">
//     	{todoItemComponents}    	    	
//     </div>    
//   )
// }
 

