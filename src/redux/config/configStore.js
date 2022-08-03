import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";
import todosToolkit from "../modules/todosToolkit";

const rootReducer = combineReducers({
	todos: todos,
});
const store = createStore(rootReducer);


// use createReducer()
// const store = configureStore({
// 	reducer: {
// 		todosToolkit: todosToolkit,
// 	}
// });


// use createSlice()
// const store = configureStore({ reducer: todosToolkit.reducer });
// console.log(store.reducer);

export default store;