import React from 'react';
import Todo from '../todo/Todo'
import './style.css';

function List({ todo, onChangeHandler, onRemoveHandler }) {
	const todo_list = todo;

	return (
		<div className="list-wrap">
			{todo_list.map((item, index) => {
				return (
					<Todo className="list-item" key={index} todo={item} 
						onChangeHandler={onChangeHandler} onRemoveHandler={onRemoveHandler} 
					/>
				);
			})}
	</div>
	);
}

export default List;