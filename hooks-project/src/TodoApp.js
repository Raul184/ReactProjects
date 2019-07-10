import React from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
//Paragraph
import Typography from "@material-ui/core/Typography";
// BACKGROUND
import Paper from "@material-ui/core/Paper";
// NAVBAR
import AppBar from "@material-ui/core/AppBar";
// ITEMS ON NAVBAR
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
//Material UI Styles
import { withStyles } from "@material-ui/core";
//IDs tool
const uuidv4 = require('uuid/v4');

//STYLES MUI
const styles = {
	gridStyles: {
		padding: "35px"
	}
}

function TodoApp(props) {
	const initialTodos = [
		{ id: 1, task: "clean", completed: false },
		{ id: 2, task: "eat", completed: true },
		{ id: 3, task: "sleep", completed: false }
	];
	//Hook for toDos
	const [toDos, setToDos] = React.useState(initialTodos);

	//ADD toDos
	const addTodo = (nueTodo) => {
		setToDos([...toDos, {id:uuidv4(), task:nueTodo, completed:false}]);
	}

	//DELETE toDos
	const removeTodo = todoId => {
		const todosR = toDos.filter(todo => todo.id !== todoId);
		setToDos(todosR);
	}; 
	//CHECKED toDos
	const checkTodo = checkId => {
		const todosU = toDos.map(todo =>
			todo.id === checkId ? { ...todo, completed: !todo.completed } : todo
		);
		setToDos(todosU);
	}

	//EDIT toDos
	const editTodo = (id, nueTask) => {
		const toDosToEdit = toDos.map(todo => 
			todo.id === id ? { ...todo, task: nueTask } : todo
		)
	}
	
	return (
		<Paper style={{width: "90%" , margin: "0 auto"}}>
			<AppBar color="primary" position="static"
				style={{ height: "64px", marginBottom: "20px" }}
			>
				<Toolbar>
					<Typography color="inherit">Todos with hooks</Typography>
				</Toolbar>
			</AppBar>
			<Grid
				className={props.gridStyles}
				container
				direction="column"
			>
				<TodoForm addTodo={addTodo} />
				<TodoList todos={toDos}
					removeTodo={removeTodo}
					checkTodo={checkTodo}
					editTodo={editTodo}
				/>
			</Grid>
		</Paper>
	)
}
export default withStyles(styles)(TodoApp);