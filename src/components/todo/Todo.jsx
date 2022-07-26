import React from 'react';
import './style.css';

function Todo({ todo, onChangeHandler, onRemoveHandler }) {
	console.log(todo.star)
	return (
		<div className="todo">
			<div className="todo-info">
				<div className="todo-content">
					<h2>{todo.title}</h2>
					<div className="star-container">
						<h3>{[...Array(todo.star)].map((_, i) => <span className="star" key={i}>⭐</span>)}</h3>
					</div>
				</div>
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