import React from 'react';
import './style.css';

function Todo({ key, todo, onChangeHandler, onRemoveHandler }) {
	return (
		<div className="todo">
			<div className="todo-info">
				<h2>{todo.title}</h2>
				<p>{todo.body}</p>
			</div>
			<div className="todo-btn">
				<button className="remove-btn" onClick={() => onRemoveHandler(todo.id)}>삭제하기</button>
				<button className="done-btn" onClick={() => onChangeHandler(todo)}>{todo.isDone ? "취소" : "완료"}</button>
			</div>
		</div>
	);
}

export default Todo;