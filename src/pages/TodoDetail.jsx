import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getTodoById } from '../redux/modules/todos';

function TodoDetail() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id } = useParams();
	console.log('detail', id);

	// get todo info by status
	// const location = useLocation();
	// const todo = location.state.todo;
	// console.log('detail', todo);

	// get todo info by useSelector()
	// const todo = useSelector((state) => state.todos).filter((item) => item.id === param.id)[0];
	// console.log(todo);

	const todo = useSelector((state) => state.todos);
	console.log(todo);
	

	useEffect(() => {
		dispatch(getTodoById(id));
	}, [dispatch, id]);
	

	const onMoveBackHandler = () => {
		navigate(-1);
		// navigate("/");
	}

	return (
		<DetailLayout>
			<DetailContainer>
				<Header>
					<div>
						{todo.isDone ? <Status status="done">Done Todo</Status> : <Status status="working">Working Todo</Status>}
						<span>ID: {todo.id}</span>
					</div>
					<BackBtn onClick={onMoveBackHandler}>이전으로</BackBtn>
				</Header>
				<Body>
					<Content>
						<h1>{todo.title}</h1>
						<StarContainer className="star-container">
							{/* <h2>{[...Array(todo.star)].map((_, i) => <span className="star" key={i}>⭐</span>)}</h2> */}
							<h2>{"⭐".repeat(todo.star)}</h2>
						</StarContainer>
					</Content>
					<p>{todo.body}</p>
				</Body>
			</DetailContainer>
		</DetailLayout>
	)
}

const DetailLayout = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const DetailContainer = styled.div`
	width: 500px;
	height: 300px;
	padding: 40px;
	
	border: 4px solid #329eff;
	border-radius: 20px;
`;

const Status = styled.span`
	margin-right: 20px;
	font-size: large;
	font-weight: bold;
	font-style: italic;

	color: ${(props) => props.status === "done" ? "blue" : "red"};
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const BackBtn = styled.button`
	width: 130px;
	height: 40px;

	background-color: #ffffff;
	border: 2px solid green;
	border-radius: 8px;

	&:hover {
		font-weight: bold;
		color: white;
		background-color: green;
	}
`;

const Body = styled.div`
	margin-top: 20px;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StarContainer = styled.div`
	width: 80px;
	text-align: center;
`;

export default TodoDetail;