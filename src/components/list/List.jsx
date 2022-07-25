import React from 'react';
import Todo from '../todo/Todo'
import './style.css';

function List(props) {
	console.log('list', props.todo);
	
	const todo_list = props.todo;

	return (
		<div className="item-list">
			{todo_list && todo_list.map((item, index) => {
				console.log('map', index, item);
				return (
					<Todo className="list-item" key={index} todo={item} />
				);
			})}
	</div>
	);
}

export default List;