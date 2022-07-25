import React from 'react';
import List from '../list/List';
import './style.css';

function Layout(props) {
	const done = [];
	const working = [];

	const todo_list = props.todo;
	
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
		console.log('remove');
		props.setTodo(todo_list.filter((item) => item.id !== todo_id));
		console.log('remove', props.todo);
	}
	
	const onChangeHandler = (todo) => {
		console.log('click', todo);
		const todo_except = todo_list.filter((item) => item.id !== todo.id);
		props.setTodo([...todo_except, {title: todo.title, body: todo.body, isDone: !todo.isDone, id: todo.id}])
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