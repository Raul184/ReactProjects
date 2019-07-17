import React from 'react';
//hooks
import useFormHook from "./Hooks/useFormHooks";
//Material UI
import Textfield from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
//MUI styles
import { withStyles } from "@material-ui/core";
import styles from "./styles/TodoFormStyles";

function TodoForm(props) {
	const [value, handleChange, reset] = useFormHook("");
	return (
		<Paper style={{margin: "1rem 0"}}>
			<form
				className={props.classes.form}
				onSubmit={e => {
				e.preventDefault();
				props.addTodo(value);
				reset();
			}}
			>
				<Textfield
					value={value}
					onChange={handleChange}
					label="Add todo"
					fullWidth
				/>
				<Button color="secondary" type="submit">
					Add Todo
				</Button>
			</form>
		</Paper>
	)
}
export default withStyles(styles)(TodoForm);