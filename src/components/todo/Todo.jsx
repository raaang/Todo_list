import React from 'react';
import './style.css';

function Todo(props) {
	return (
		<div className="todo">
			<div className="todo-info">
				<h2>{props.todo.title}</h2>
				<p>{props.todo.body}</p>
			</div>
			<div className="todo-btn">
				<button className="remove-btn" onClick={() => props.onRemoveHandler(props.todo.id)}>삭제하기</button>
				<button className="done-btn" onClick={() => props.onChangeHandler(props.todo)}>{props.todo.isDone ? "취소" : "완료"}</button>
			</div>
		</div>
	);
}

export default Todo;