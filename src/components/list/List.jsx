import React from 'react';
import styled from 'styled-components';
import Todo from '../todo/Todo';

function List({ todo }) {
	return (
		<ListWrap>
			{todo.map((item) => {
				return <Todo className="list-item" key={item.id} todo={item}/>
			})}
	</ListWrap>
	);
}

const ListWrap = styled.div`
	width: 100%;

	display: flex;
	flex-wrap: wrap;
`;

export default List;