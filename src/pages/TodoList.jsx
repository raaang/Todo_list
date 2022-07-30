import React, { useState } from 'react';
import Form from '../components/form/Form';
import Header from '../components/header/Header';
import Layout from '../components/layout/Layout';

function TodoList() {
	// const [todo, setTodo] = useState([{
	// 	title: "",
	// 	body: "",
	// 	isDone: false,
	// 	id: 0,
	// 	star: 0
	// }]);

	// console.log(todo);

	return (
		<>
			<Header />
			<Form />
			<Layout />
		</>
	);
}

export default TodoList;