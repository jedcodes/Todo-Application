import React from "react";
import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";
import "../../Styles/Navbar/Navbar.css";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		marginRight: "auto"
	}
}));

const Navbar = () => {
	const classes = useStyles();
	return (
		<AppBar position="static" className="navbar">
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					Todo App
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
