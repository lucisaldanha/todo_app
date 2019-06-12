import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
	return (
		<div className = "items">
	      	<input type= "checkbox" checked= {props.completo}/>
	      	<p>{props.texto}</p>
     	</div>
	)
}

export default TodoItem;