import React from 'react';
import Todo from '../todo/Todo'
import './style.css';

function List(props) {
	const todo_list = props.todo;

	return (
		<div className="list-wrap">
			{todo_list.map((item, index) => {
				return (
					<Todo className="list-item" key={index} todo={item} 
						onChangeHandler={props.onChangeHandler} onRemoveHandler={props.onRemoveHandler} 
					/>
				);
			})}
	</div>
	);
}

export default List;