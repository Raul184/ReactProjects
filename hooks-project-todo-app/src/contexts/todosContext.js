import React, { createContext, useReducer } from 'react';
import todoReducer from "../reducers/todoReducer.js";

export const TodosContext = createContext();

//default Todos 
const defaultTodos = [
	{ id: 1, task: "Mow the lawn using goats", completed: false },
	{ id: 2, task: "Release the devil", completed: false }
];

export default function TodosProvider(props) {
	const { todos, dispatch } = useReducer(todoReducer, defaultTodos)	
	return (
		<TodosContext.provider value={{todos , dispatch}}>
			{props.children}
		</TodosContext.provider>
	)
}
