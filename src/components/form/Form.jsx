import React, { useState } from 'react';
import './style.css';

function Form({ todo, setTodo, count, setCount }) {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const onSubmitHandler = () => {
		setTodo([...todo, {title: title, body: content, isDone: false, id: count+1}]);
		setCount(count+1);
		setTitle('');
		setContent('');
	}

	return (
		<div className="form">
			<div className="input">
				<span>제목</span>
				<input type="text" id="title" onChange={(event)=> setTitle(event.target.value)} value={title}/>
				<span>내용</span>
				<input type="text" id="title" onChange={(event)=> setContent(event.target.value)} value={content}/>
			</div>
			<button className="add-btn" onClick={onSubmitHandler}>
				추가하기
			</button>
		</div>
	);
}

export default Form;