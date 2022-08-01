import React from 'react'
import styled from 'styled-components';

function Header() {

	return (
		<HeaderContainer>
			<div className="title">📝 My Todo List</div>
			<div className="react">React</div>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	height: 50px;
	padding: 0px 20px 0px 20px;

	text-align: center;

	border-radius: 10px;
	border: 2px solid #329eff;
	background-color: aliceblue;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default Header;