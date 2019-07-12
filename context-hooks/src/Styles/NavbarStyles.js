import { fade } from "@material-ui/core/styles/colorManipulator";
const styles = theme => ({
	root: {
		marginBottom: 0,
		width: "100%"
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		
	},
	title: {
		display: "none",
		//	> sm
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	search: {
		position: "relative",
		//default theme
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, .15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, .25)
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing.unit,
			width: "auto"
		}
	},
	searchIcon: {
		width: theme.spacing.unit * 9,
		height: "100%",
		position: "absolute",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "inherit",
		width:"100%"
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit,
		paddingRight:theme.spacing.unit,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: 120,
			"&:focus": {
				width:200
			}
		}
	}
});

export default styles;