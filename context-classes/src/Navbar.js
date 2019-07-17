import React, { useContext } from 'react';
//styles
import { withStyles } from "@material-ui/core";
import styles from "./Styles/NavbarStyles";
// Nav components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
//Context
import {Context} from "./contexts/ThemeContext";
// import { withLanguageContext } from "./contexts/LanguageContext";
//Context Language being used
import { LanguageContext } from "./contexts/LanguageContext";

const content = {
	english: {
		search: "Search",
		flag: "🇬🇧"
	},
	french: {
		search: "Cherche",
		flag: "🇫🇷 "
	},
	spanish: {
		search: "Buscar",
		flag: "SP"
	}
}

function Navbar(props) {
	//Simplys
	const { classes } = props;
	const { isDark, handleSwitch } = useContext(Context);
	//2nd context
	const { language } = useContext(LanguageContext);
	const { flag } = content[language];

		return (
					<div className={classes.root}>
					<AppBar position="static" color={isDark ? "default" : "primary"}>
						<Toolbar>
							<IconButton>
								<span role="img" aria-label="country flag">{flag}</span>
							</IconButton>
							<Typography className={classes.title}>App Title</Typography>
							<Switch onChange={handleSwitch}/>
							<div className={classes.grow} />
							<div className={classes.search}>
								<div className={classes.searchIcon}>
									<SearchIcon/>
								</div>
								<InputBase
									classes={{
										root: classes.inputRoot,
										input: classes.inputInput
									}}
								/>
							</div> 
						</Toolbar>
					</AppBar>
				</div>
		)
}


export default withStyles(styles)(Navbar);