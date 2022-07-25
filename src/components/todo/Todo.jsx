import React from 'react';
import './style.css';

function Todo() {

	return (
		<div className="item">
			<div className="item-info">
				<h2>리액트 공부하기</h2>
				<p>리액트 기초를 공부해봅시다.</p>
			</div>
			<div className="item-btn">
				<button className="remove-btn">삭제하기</button>
				<button className="done-btn">완료</button>
			</div>
		</div>
	);
}

export default Todo;