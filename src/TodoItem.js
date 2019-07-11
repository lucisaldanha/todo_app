import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
	const completedStyle = {
		fontStyle: 'italic',
		color: '#7386A4',
		textDecoration: 'line-through',
		fontSize: '1.2rem'
	}
	return (
		<div className = "items">
	      	<input 
		      	type = "checkbox" 
		      	checked = {props.completo}
		      	onChange = {() => props.handleChange(props.id)} 
	      	/>
	      	<p style={props.completo ? completedStyle : null}>{props.texto}</p>
     	</div>
	)
}

export default TodoItem;