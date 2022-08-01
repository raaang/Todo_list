import React from 'react'
import Router from './shared/Router';
import styled from 'styled-components';

function App() {
  return (
		<AppLayout>
			<Router />
		</AppLayout>
	);
}

const AppLayout = styled.div`
	width: 95vw;
	min-width: 800px;
	max-width: 1200px;
	margin: auto;
`;

export default App;
