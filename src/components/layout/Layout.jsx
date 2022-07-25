import React from 'react';
import List from '../list/List';
import './style.css';

function Layout(props) {
	console.log('layout', props.todo);

	return (
		<div className="list-layout">
				<h2>Working.. 🔥</h2>
				<List todo={props.todo}/>
				<h2>Done..! 🎉</h2>
				<List todo={props.todo}/>
		</div>
	);
}

export default Layout;