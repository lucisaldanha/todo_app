import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
	return (
		<div className = "items">
	      	<input 
		      	type = "checkbox" 
		      	checked = {props.completo}
		      	onChange = {() => props.handleChange(props.id)} 
	      	/>
	      	<p>{props.texto}</p>
     	</div>
	)
}

export default TodoItem;