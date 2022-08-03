import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import List from '../list/List';

function Layout() {
	const done = [];
	const working = [];

	const todos = useSelector((state) => state.todos.todo_list);

	// use redux-toolkit
	// const todos = useSelector((state) => state.todosToolkit.todo_list);

	// use redux-toolkit createSlice
	// const todos = useSelector((state) => state.todo_list);
	// console.log('layout', todos);
	
	todos.map((item) => {
		if (item.isDone) {
			done.push(item);
			console.log('donedone', done);
		} else {
			working.push(item);
			console.log('workwork', working);
		}
	})
	
	return (
		<ListLayout>
			<h2>Working.. 🔥</h2>
			<List todo={working} />
			<h2>Done..! 🎉</h2>
			<List todo={done} />
		</ListLayout>
	);
}

const ListLayout = styled.div`
	margin: auto 20px;
`;

export default Layout;