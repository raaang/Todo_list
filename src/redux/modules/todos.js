// Action Value
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const ISDONE_TODO = "ISDONE_TODO";

// Action Creator
export const addTodo = (payload) => {
	return {
		type: ADD_TODO,
		payload,
	};
};

export const removeTodo = (payload) => {
	return {
		type: REMOVE_TODO,
		payload,
	}
}

export const isdoneTodo = (payload) => {
	return {
		type: ISDONE_TODO,
		payload,
	}
}

// Initial State
const initialState = [
	{
		id: 1,
		title: "리액트 강의보기",
		body: "챕터 1부터 챕터 12까지 학습",
		isDone: false,
		star: 2
	},
	{
		id: 2,
		title: "점심 먹기",
		body: "점심 뭐먹지..?",
		isDone: true,
		star: 1
	}
]

// Reducer
const todos = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			console.log('reducer ADD_TODO', action.payload);
			return [...state, {
				...action.payload,
				id: state[state.length - 1].id + 1
			}];
		
		case REMOVE_TODO:
			console.log('reducer REMOVE_TODO', action.payload);
			return state.filter((item) => item.id !== action.payload);

		case ISDONE_TODO:
			console.log('reducer ISDONE_TODO', action.payload);
			const todo_new = state.map((item) => {
				if (item.id === action.payload) {
					return {...item, isDone: !item.isDone};
				} else {
					return item;
				}
			});
			return todo_new;

		default:
			return state;
	}
};

// export default Reducer
export default todos;