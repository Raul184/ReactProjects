import React from 'react'
//Material UI
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function TodoList(props) {
	return (
		<Paper>
			<List>
				{props.todos.map(todo =>
					<>
						<ListItem>
							<ListItemText key={todo.id}>{todo.task}</ListItemText>
						</ListItem>
						<Divider />
					</>
				)}
			</List>
		</Paper>
	)
}
