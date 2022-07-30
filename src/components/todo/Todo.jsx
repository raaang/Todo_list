import React from 'react';
import { useDispatch } from 'react-redux';
import { isdoneTodo, removeTodo } from '../../redux/modules/todos';
import './style.css';

function Todo({ todo }) {
	const dispatch = useDispatch();
		
	const onRemoveHandler = (todo_id) => {
		// setTodo(todo_list.filter((item) => item.id !== todo_id));
		dispatch(removeTodo(todo_id));
		console.log('remove', todo);
	}
	
	const onChangeHandler = (todo_id) => {
		console.log('click', todo);
		dispatch(isdoneTodo(todo_id));
		// const todo_except = todo_list.filter((item) => item.id !== todo.id);
		// setTodo([...todo_except, {title: todo.title, body: todo.body, isDone: !todo.isDone, id: todo.id, star: todo.star}]);

		// map() 활용
		// const todo_new = todo_list.map((item) => {
		// 	if (item.id === todo.id) {
		// 		return {...item, isDone: !item.isDone};
		// 	} else {
		// 		return {...item};
		// 	}
		// });
		// setTodo(todo_new);
	}

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
				<button className="done-btn" onClick={() => onChangeHandler(todo.id)}>{todo.isDone ? "취소" : "완료"}</button>
			</div>
		</div>
	);
}

export default Todo;