import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTodo, getTodoById, toggleStatusTodo } from '../../redux/modules/todos';

function Todo({ todo }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
		
	const onRemoveHandler = (todo_id) => {
		dispatch(deleteTodo(todo_id));
		console.log('remove', todo);
	}
	
	const onChangeHandler = (todo_id) => {
		console.log('click', todo);
		dispatch(toggleStatusTodo(todo_id));
	}

	const onMoveHandler = (todo_id) => {
		console.log('move', todo);
		navigate(`detail/${todo_id}`);
		// navigate(`/detail/${todo_id}`, {state: {todo: todo}});
	}

	return (
		<TodoContainer>
			<TodoInfo>
				<MoveDetail onClick={() => onMoveHandler(todo.id)}>상세페이지</MoveDetail>
				<TodoContent>
					<h2>{todo.title}</h2>
					<StarContainer>
						{/* <h3>{[...Array(todo.star)].map((_, i) => <span className="star" key={i}>⭐</span>)}</h3> */}
						<h3>{"⭐".repeat(todo.star)}</h3>
					</StarContainer>
				</TodoContent>
				<p>{todo.body}</p>
			</TodoInfo>
			<BtnContainer>
				<RemoveBtn onClick={() => onRemoveHandler(todo.id)}>삭제하기</RemoveBtn>
				<DoneBtn onClick={() => onChangeHandler(todo.id)}>{todo.isDone ? "취소" : "완료"}</DoneBtn>
			</BtnContainer>
		</TodoContainer>
	);
}

const TodoContainer = styled.div`
	width: 280px;
	height: 180px;
	padding: 20px;
	margin-right: 20px;
	margin-bottom: 20px;

	text-align: center;

	float: left;
	
	border: 4px solid #329eff;
	border-radius: 10px;
`;

const TodoInfo = styled.div`
	height: 60%;
	text-align: left;
`;

const MoveDetail = styled.span`
	&:hover {
		background-color: lightskyblue;
	}
`;

const TodoContent = styled.div`
	height: 60%;
	display: flex;
	justify-content: space-between;
`;

const StarContainer = styled.div`
	width: 80px;

	text-align: center;
`;

const BtnContainer = styled.div`
	margin: 30px auto;

	display: flex;
	justify-content: space-between;

	button {
		width: 130px;
		height: 40px;

		background-color: #ffffff;
	}
`;

const RemoveBtn = styled.button`
	border: 2px solid red;
	border-radius: 8px;

	&:hover {
		font-weight: bold;
		color: white;
		background-color: red;
	}
`;

const DoneBtn = styled.button`
	border: 2px solid green;
	border-radius: 8px;

	&:hover {
		font-weight: bold;
		color: white;
		background-color: green;
	}
`;

export default Todo;