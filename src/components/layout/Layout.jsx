import React from 'react';
import { useSelector } from 'react-redux';
import List from '../list/List';
import './style.css';

function Layout() {
	const done = [];
	const working = [];

	const todos = useSelector((state) => state.todos);
	
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
		<div className="list-layout">
			<h2>Working.. 🔥</h2>
			<List todo={working} />
			<h2>Done..! 🎉</h2>
			<List todo={done} />
		</div>
	);
}

export default Layout;