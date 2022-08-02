import { nanoid } from 'nanoid';

// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const STATUS_TODO = "STATUS_TODO";
const GET_TODO_ID = "GET_TODO_ID";

// Action Creator
export const addTodo = (payload) => {
	return {
		type: ADD_TODO,
		payload,
	};
};

export const deleteTodo = (payload) => {
	return {
		type: DELETE_TODO,
		payload,
	}
}

export const toggleStatusTodo = (payload) => {
	return {
		type: STATUS_TODO,
		payload,
	}
}

export const getTodoById = (payload) => {
	return {
		type: GET_TODO_ID,
		payload,
	}
}

// Initial State

// todo_list -> 모든 정보
// todo -> 상세화면 정보
const initialState = {
	todo_list: [
		{
			id: nanoid(10),
			title: "리액트 강의보기",
			body: "챕터 1부터 챕터 12까지 학습",
			isDone: false,
			star: 2
		},
		{
			id: nanoid(10),
			title: "점심 먹기",
			body: "점심 뭐먹지..?",
			isDone: true,
			star: 1
		}
	],
	todo: {
		id: nanoid(10),
		title: "리액트 강의보기",
		body: "챕터 1부터 챕터 12까지 학습",
		isDone: false,
		star: 2
	}
}

// Reducer
const todos = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			// console.log('reducer ADD_TODO', action.payload);
			return {
				...state,
				todo_list: [...state.todo_list, {
					...action.payload,
					id: nanoid(10)
				}]
			};
		
		case DELETE_TODO:
			// console.log('reducer DELETE_TODO', action.payload);
			return {
				...state,
				todo_list: state.todo_list.filter((item) => item.id !== action.payload)
			};

		case STATUS_TODO:
			// console.log('reducer STATUS_TODO', action.payload);
			const todo_new = state.todo_list.map((item) => {
				if (item.id === action.payload) {
					return {...item, isDone: !item.isDone};
				} else {
					return item;
				}
			});
			return {
				...state,
				todo_list: todo_new
			};

		case GET_TODO_ID:
			// console.log('reducer GET_TODO_ID', action.payload);
			const todo_find = state.todo_list.find((item) => item.id === action.payload);
			return {
				...state,
				todo: todo_find
			};
			
		default:
			return state;
	}
};

// export default Reducer
export default todos;