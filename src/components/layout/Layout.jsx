import React from 'react';
import List from '../list/List';
import './style.css';

function Layout() {

	return (
		<div className="layout">
			<div className="working-list">
				<h2>Working.. 🔥</h2>
				<List />
			</div>

			<div className="done-list">
				<h2>Done..! 🎉</h2>
				<List />
			</div>
		</div>
	);
}

export default Layout;