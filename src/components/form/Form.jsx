import React, { useState } from 'react';
import './style.css';

function Form({ todo, setTodo }) {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [star, setStar] = useState(1);

	const onSubmitHandler = () => {
		setTodo([...todo, {title: title, body: content, isDone: false, id: todo.length, star: Number(star)}]);
		setTitle('');
		setContent('');
		setStar(1);
	}

	return (
		<div className="form">
			<div className="input">
				<span>제목</span>
				<input type="text" id="title" onChange={(event)=> setTitle(event.target.value)} value={title}/>
				<span>내용</span>
				<input type="text" id="title" onChange={(event)=> setContent(event.target.value)} value={content}/>
				
				<span>중요도</span>
				<select id="choice" onChange={(event) => setStar(event.target.value)} value={star}>
				  <option value="1">⭐</option>
				  <option value="2">⭐⭐</option>
				  <option value="3">⭐⭐⭐</option>
				</select>
			</div>
			<button className="add-btn" onClick={onSubmitHandler}>
				추가하기
			</button>
		</div>
	);
}

export default Form;