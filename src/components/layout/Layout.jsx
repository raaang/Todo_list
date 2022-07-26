import React from 'react';
import List from '../list/List';
import './style.css';

function Layout({ todo, setTodo }) {
	const done = [];
	const working = [];

	const todo_list = todo;
	
	todo_list.map((item) => {
		if (item.isDone) {
			done.push(item);
			console.log('donedone', done);
		} else {
			working.push(item);
			console.log('workwork', working);
		}
	})
	
	const onRemoveHandler = (todo_id) => {
		setTodo(todo_list.filter((item) => item.id !== todo_id));
		console.log('remove', todo);
	}
	
	const onChangeHandler = (todo) => {
		console.log('click', todo);
		const todo_except = todo_list.filter((item) => item.id !== todo.id);
		setTodo([...todo_except, {title: todo.title, body: todo.body, isDone: !todo.isDone, id: todo.id}]);

		// map() 활용
		// const todo_new = todo_list.map((item) => {
		// 	if (item.id === todo.id) {
		// 		return {...todo, isDone: !todo.isDone};
		// 	} else {
		// 		return {...todo};
		// 	}
		// });
		// setTodo(todo_new);
	}

	return (
		<div className="list-layout">
				<h2>Working.. 🔥</h2>
				<List todo={working} onChangeHandler={onChangeHandler} onRemoveHandler={onRemoveHandler} />
				<h2>Done..! 🎉</h2>
				<List todo={done} onChangeHandler={onChangeHandler} onRemoveHandler={onRemoveHandler} />
		</div>
	);
}

export default Layout;