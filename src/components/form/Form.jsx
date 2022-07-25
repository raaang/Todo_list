import React from 'react';
import './style.css';

function Form() {

	return (
		<div className="form">
			<div className="input">
				<span>제목</span>
				<input type="text" />
				<span>내용</span>
				<input type="text" />
			</div>
			<button className="add-btn">추가하기</button>
		</div>
	);
}

export default Form;