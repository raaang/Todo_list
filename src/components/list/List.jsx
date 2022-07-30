import React from 'react';
import Todo from '../todo/Todo'
import './style.css';

function List({ todo }) {
	// const todos = useSelector((state) => state.todos);

	return (
		<div className="list-wrap">
			{todo.map((item, index) => {
				return <Todo className="list-item" key={index} todo={item}/>
			})}
	</div>
	);
}

export default List;