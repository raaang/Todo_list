import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getTodoById } from '../redux/modules/todos';
// import { get, getTodoById } from '../redux/modules/todosToolkit';

function TodoDetail() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id } = useParams();

	// get todo info by status
	// const location = useLocation();
	// const todo = location.state.todo;
	// console.log('detail', todo);

	// get todo info by useSelector()
	// const todo = useSelector((state) => state.todos).filter((item) => item.id === param.id)[0];
	// console.log(todo);


	// todo_list가 아니라 todo를 가져온다!!!
	const todo = useSelector((state) => state.todos.todo);

	// use redux-toolkit
	// const todo = useSelector((state) => state.todosToolkit.todo);

	// use redux-toolkit createSlice
	// const todo = useSelector((state) => state.todo);
	// console.log(todo);

	useEffect(() => {
		dispatch(getTodoById(id));
		// dispatch(get(id));						// use redux-toolkit createSlice()
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