import React from 'react';
import './style.css';

function Todo(props) {
	console.log('todo', props);
	
	// const done_btn = '';
	// if (props.todo.isDone) {
	// 	done_btn = '취소';
	// } else {
	// 	done_btn = '완료';
	// }

	return (
		<div className="item">
			<div className="item-info">
				<h2>{props.todo.title}</h2>
				<p>{props.todo.body}</p>
			</div>
			<div className="item-btn">
				<button className="remove-btn">삭제하기</button>
				<button className="done-btn">{props.isDone ? "취소" : "완료"}</button>
			</div>
		</div>
	);
}

export default Todo;