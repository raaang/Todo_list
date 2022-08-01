import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

function TodoDetail() {
	const navigate = useNavigate();
	
	const param = useParams();
	const location = useLocation();
	const todo = location.state.todo;
	console.log('detail', todo);
	
	const onMoveBackHandler = () => {
		navigate(-1);
	}

	return (
		<DetailLayout>
			<DetailContainer>
				<Header>
					<span>ID: {param.id}</span>
					<BackBtn onClick={onMoveBackHandler}>이전으로</BackBtn>
				</Header>
				<Body>
					<Content>
						<h1>{todo.title}</h1>
						<StarContainer className="star-container">
							<h2>{[...Array(todo.star)].map((_, i) => <span className="star" key={i}>⭐</span>)}</h2>
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

const Header = styled.div`
	/* background-color: beige; */

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const BackBtn = styled.button`
	width: 130px;
	height: 40px;

	background-color: azure;
	border: 2px solid blue;
	border-radius: 8px;
`;

const Body = styled.div`
	margin-top: 20px;
	/* background-color: aqua; */
`;

const Content = styled.div`
	/* background-color: beige; */
	display: flex;
	justify-content: space-between;
`;

const StarContainer = styled.div`
	width: 80px;
	text-align: center;

	/* background-color: firebrick; */
`;

export default TodoDetail;