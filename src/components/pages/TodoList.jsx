import React, { useState } from 'react';
import Form from '../form/Form';
import Header from '../header/Header';
import Layout from '../layout/Layout';

function TodoList() {
	const [count, setCount] = useState(0);
	const [todo, setTodo] = useState([{
		title: "",
		body: "",
		isDone: false,
		id: 0
	}]);

	return (
		<>
			<Header />
			<Form todo={todo} setTodo={setTodo} count={count} setCount={setCount} />
			<Layout todo={todo} setTodo={setTodo}/>
		</>
	);
}

export default TodoList;