import React, { useState } from 'react';
import Form from '../form/Form';
import Header from '../header/Header';
import Layout from '../layout/Layout';

function TodoList() {
	const [todo, setTodo] = useState([{
		title: "",
		body: "",
		isDone: false,
		id: 0,
		star: 0
	}]);

	console.log(todo);

	return (
		<>
			<Header />
			<Form todo={todo} setTodo={setTodo} />
			<Layout todo={todo} setTodo={setTodo} />
		</>
	);
}

export default TodoList;