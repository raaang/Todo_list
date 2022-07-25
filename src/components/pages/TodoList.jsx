import React, { useState } from 'react';
import Form from '../form/Form';
import Header from '../header/Header';
import Layout from '../layout/Layout';

function TodoList(props) {
	const [count, setCount] = useState(0);
	const [todo, setTodo] = useState([{
		title: '리액트 공부하기',
		body: '리액트 기초를 공부해봅시다.',
		isDone: false,
		id: count
	}]);

	console.log(todo);
	console.log(count);

	return ( 
		< div>
			< Header />
			< Form todo={ todo } setTodo={ setTodo } count={ count } setCount={ setCount } />
			< Layout todo={ todo } />
		</div>
	);
}

export default TodoList;