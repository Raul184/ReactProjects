import React from 'react'
import Button from "@material-ui/core/Button";
import Textfield from "@material-ui/core/Textfield";
//Hook Helper
import useFormHook from "./Hooks/useFormHooks";

export default function EditTodoForm({ task, id, editTodo, checkTodo }) {
	const [edited, setEditedTodo, reset] = useFormHook(task);
	return (
		<form onSubmit={
			e => {
				e.preventDefault();
				editTodo(id, edited);
				reset();
				checkTodo();
			}}
			style={{margin: "0 auto" , width: "50%"}}
		>
			<Textfield
				value={edited}
				onChange={setEditedTodo}
				fullWidth
				autoFocus
			/>
			<Button style={{ float: "right" }} color="secondary" type="submit">
					Edit Todo
				</Button>
		</form>
	)
}
