import { nanoid } from 'nanoid';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// Action Creator
export const addTodo = createAction("ADD_TODO");
export const deleteTodo = createAction("DELETE_TODO");
export const toggleStatusTodo = createAction("STATUS_TODO");
export const getTodoById = createAction("GET_BY_ID");

// Initial State
// todo_list -> 모든 정보
// todo -> 상세화면 정보
const initialState = {
	todo_list: [{
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
// const todosToolkit = (state = initialState, action) => {
// 	switch (action.type) {
// 		case addTodo.type:
// 			console.log('ADD by toolkit', addTodo());
// 			return {
// 				...state, 
// 				todo_list: [...state.todo_list, {
// 					...action.payload,
// 					id: nanoid(10)
// 				}]
// 			};

// 		case deleteTodo.type:
// 			console.log('DELETE by toolkit', deleteTodo());
// 			return {
// 				...state,
// 				todo_list: state.todo_list.filter((item) => item.id !== action.payload)
// 			};

// 		case toggleStatusTodo.type:
// 			console.log('STATUS by toolkit', toggleStatusTodo());
// 			return {
// 				...state,
// 				todo_list: state.todo_list.map((item) => {
// 					if (item.id === action.payload) {
// 						return {
// 							...item,
// 							isDone: !item.isDone
// 						};
// 					} else {
// 						return item;
// 					}
// 				})
// 			};
		
// 		case getTodoById.type:
// 			console.log('GET ID by toolkit', getTodoById());
// 			console.log()
// 			return {
// 				...state,
// 				todo: state.todo_list.find((item) => item.id === action.payload)
// 			};

// 		default:
// 			return state;
// 	}
// }


// use createReducer()
// const todosToolkit = createReducer(initialState, {
// 	[addTodo]: (state, action) => {
// 		state.todo_list.push({ ...action.payload , id: nanoid(10) });
// 	},
// 	[deleteTodo]: (state, action) => {
// 		state.todo_list = state.todo_list.filter((item) => item.id !== action.payload)
// 	},
// 	[toggleStatusTodo]: (state, action) => {
// 		state.todo_list = state.todo_list.map((item) => {
// 			if (item.id === action.payload) {
// 				return { ...item, isDone: !item.isDone }
// 			} else {
// 				return item;
// 			}
// 		})
// 	},
// 	[getTodoById]: (state, action) => {
// 		state.todo = state.todo_list.find((item) => item.id === action.payload);
// 	}
// })


// use createSlice()
const todosToolkit = createSlice({
	name: 'todosToolkit',
	initialState,
	reducers: {
		add: (state, action) => {
			state.todo_list.push({ ...action.payload , id: nanoid(10) });
		},
		remove: (state, action) => {
			state.todo_list = state.todo_list.filter((item) => item.id !== action.payload)
		},
		toggleStatus: (state, action) => {
			state.todo_list = state.todo_list.map((item) => {
				if (item.id === action.payload) {
					return { ...item, isDone: !item.isDone }
				} else {
					return item;
				}
			})
		},
		get: (state, action) => {
			state.todo = state.todo_list.find((item) => item.id === action.payload);
		} 
	}
})

export const { add, remove, toggleStatus, get } = todosToolkit.actions;

// export default Reducer
export default todosToolkit;