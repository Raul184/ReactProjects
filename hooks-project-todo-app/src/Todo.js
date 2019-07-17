import React from 'react';
//Hook helper
import useToggleState from './Hooks/useToggleHook';
import EditTodoForm from "./EditTodoForm";
//Material UI
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
//Button & Icon
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";


function Todo({editTodo, id, task, completed, checkTodo, removeTodo, addTodo}) {
	
	//Hook
	const [edit, toogleEdit] = useToggleState(false);
	
	return (
		<ListItem>
			{edit ?
				<EditTodoForm
					editTodo={editTodo} id={id} task={task} checkTodo={toogleEdit}
					addTodo={addTodo}
				/>
			:
				<>
					<Checkbox checked={completed}
							onClick={() => checkTodo(id)}
					/>
					<ListItemText style={{ textDecoration: completed && "line-through" }}>
						{task}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton
							aria-label="Delete"
							onClick={() => removeTodo(id)}
						>
							<DeleteIcon></DeleteIcon>
						</IconButton>
						<IconButton
							aria-label="Edit"
							onClick={() => toogleEdit(!edit)}
						>
							<EditIcon></EditIcon>
						</IconButton>
					</ListItemSecondaryAction>
				</>
			}
		</ListItem>
	)
}	

export default Todo;