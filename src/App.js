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
		this.setState(prevState =>{
			const updatedTodos = prevState.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo
			})
			return {
				todos: updatedTodos
			}
		})
	}

	render() {
		const todoItemComponents = this.state.todos.map(todoDataItem => { 
			return <TodoItem 
						key={todoDataItem.id} 
						id={todoDataItem.id}
						texto={todoDataItem.text}
						completo={todoDataItem.completed}
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
 

