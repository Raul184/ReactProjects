import React from 'react'
import Button from "@material-ui/core/Button";
import Textfield from "@material-ui/core/Textfield";
//Hook Helper
import useFormHook from "./Hooks/useFormHooks";

export default function EditTodoForm({task, id, editTodo, checkTodo}) {
	const [edited, setEditedTodo, reset] = useFormHook(task);

	return (
		<form onSubmit={
			e => {
				e.preventDefault();
				editTodo(id, edited);
				reset();
				checkTodo();
			}
		}>
			<Textfield
				value={edited}
				onChange={setEditedTodo}
				fullWidth
			/>
		</form>
	)
}
