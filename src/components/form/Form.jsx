import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../../redux/modules/todos';
// import { add, addTodo } from '../../redux/modules/todosToolkit';

function Form() {
	const dispatch = useDispatch();
	
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [star, setStar] = useState(1);

	const onSubmitHandler = () => {
		const todo_new = {title: title, body: content, isDone: false, star: Number(star)};
		dispatch(addTodo(todo_new));
		// dispatch(add(todo_new));				// use redux-toolkit createSlice()
		setTitle('');
		setContent('');
		setStar(1);
	}

	useEffect(() => {
		return () => {
			setTitle('');
			setContent('');
			setStar(1);
		};
	}, []);

	return (
		<FormContainer>
			<div className="input">
				<InputText>제목</InputText>
				<InputContent type="text" id="title" onChange={(event)=> setTitle(event.target.value)} value={title}/>
				<InputText>내용</InputText>
				<InputContent type="text" id="title" onChange={(event)=> setContent(event.target.value)} value={content}/>
				
				<InputText>중요도</InputText>
				<InputStar onChange={(event) => setStar(event.target.value)} value={star}>
				  <option value="1">⭐</option>
				  <option value="2">⭐⭐</option>
				  <option value="3">⭐⭐⭐</option>
				</InputStar>
			</div>
			<InputBtn className="add-btn" onClick={onSubmitHandler}>
				추가하기
			</InputBtn>
		</FormContainer>
	);
}

const FormContainer = styled.div`
	height: 100px;
	padding: 0px 30px 0px 30px;

	background-color: #eee;
	border-radius: 10px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const InputText = styled.span`
	font-weight: bold;
`;

const InputContent = styled.input`
	width: 250px;
	height: 40px;
	margin: auto 20px;
	padding: 0px 10px 0px 10px;

	border: 0px solid #ffffff;
	border-radius: 10px;
`;

const InputStar = styled.select`
	width: 80px;
	height: 40px;
	margin: auto 20px;
	
	border: 0px solid #ffffff;
	border-radius: 10px;
`;

const InputBtn = styled.button`
	width: 140px;
	height: 40px;

	font-weight: bold;
	color: white;
	background-color: blueviolet;

	border: 0px solid #ffffff;
	border-radius: 10px;
`;

export default Form;