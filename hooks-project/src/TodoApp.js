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

const styles = {
	root: {
		padding: 0,
		margin: 0,
		height: "100vh",
		backgroundColor: "#fafafa"
	},
	gridStyles: {
		margin: "15px"
	}
}

function TodoApp(props) {
	const initialTodos = [
		{ id: 1, task: "clean", completed: false },
		{ id: 2, task: "eat", completed: false },
		{ id: 3, task: "sleep", completed: false }
	];
	//Hook for toDos
	const [toDos, setToDos] = React.useState(initialTodos);

	//ADD toDos
	const addTodo = (nueTodo) => {
		setToDos([...toDos, {id:4, task:nueTodo, completed:false}]);
	}
	return (
		<Paper className={props.root}>
			<AppBar color="primary" position="static" style={{ height: "64px" }}>
				<Toolbar>
					<Typography color="inherit">Todos with hooks</Typography>
				</Toolbar>
			</AppBar>
			<TodoForm addTodo={addTodo} />
			<Grid
				className={props.gridStyles}
	  		container
  			direction="column"
  			justify="center"
  			alignItems="center"
			>
				<TodoList todos={toDos} />
			</Grid>
		</Paper>
	)
}
export default withStyles(styles)(TodoApp);