import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isdoneTodo, removeTodo } from '../../redux/modules/todos';
import './style.css';

function Todo({ todo }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
		
	const onRemoveHandler = (todo_id) => {
		dispatch(removeTodo(todo_id));
		console.log('remove', todo);
	}
	
	const onChangeHandler = (todo_id) => {
		console.log('click', todo);
		dispatch(isdoneTodo(todo_id));
	}

	const onMoveHandler = (todo_id) => {
		console.log('move', todo);
		navigate(`/detail/${todo_id}`, {state: {todo: todo}});
	}

	return (
		<div className="todo">
			<div className="todo-info">
				<span className="todo-detail" onClick={() => onMoveHandler(todo.id)}>상세페이지</span>
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
				<button className="done-btn" onClick={() => onChangeHandler(todo.id)}>{todo.isDone ? "취소" : "완료"}</button>
			</div>
		</div>
	);
}

export default Todo;