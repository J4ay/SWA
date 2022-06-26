import React from "react";
import { withStyles } from '@material-ui/core/styles';

import Login from './Login';
import Home from './Home'
import Customer from './Customer'
import User from './User';

import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Routes, Route, Link } from "react-router-dom";
import Contracts from "./Contracts";
import { IconButton } from "@material-ui/core";
import UserDialogSelf from "./UserDialogSelf";

const styles = theme => ({
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

const theUrl = "http://localhost:8080/";

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			isAdmin: false,
			userid: "",
			dialogIsOpen: false,
			userFilter: "",
		};
	}

	openDialog = () => {
		this.setState({ dialogIsOpen: true });
	  };

	closeDialog = () => {
		this.setState({ dialogIsOpen: false });
	};

	authorized = () => {
		this.setState({ loggedIn: true });
	}

	isAdmin = () => {
		this.setState({ isAdmin: true });
	}

	notAdmin = () => {
		this.setState({ isAdmin: false });
	}

	setUser = (id) => {
		this.setState({ userid: id });
	}

	setUserFilter = (filter) => {
		this.setState({ userFilter: filter });
	}


	render() {
		if (this.state.loggedIn) {
			return (
				<div>
					<Button component={Link} to="/" variant="contained" color="primary" onClick={()=>{this.setUserFilter("")}}>Customers</Button>
					<Button component={Link} to="/contracts" variant="contained" color="primary" onClick={()=>{this.setUserFilter("")}}>Contracts</Button>
					<Button component={Link} to="/user" variant="contained" color="primary" onClick={()=>{this.setUserFilter("")}}>Users</Button>
					<Button variant="contained" color="secondary" sx={{float:"right"}} onClick={()=>{this.setState({ loggedIn: false })}}>Logout</Button>
					<IconButton sx={{ mr: 1 }} onClick={() => {this.openDialog(); this.setUserFilter("")}}><AccountCircleIcon sx={{ fontSize: 32 }} /></IconButton>
					<Routes>
						<Route path="/" element={<Customer isAdmin={this.state.isAdmin} setUserFilter={this.setUserFilter}/>} />
						<Route path="/contracts" element={<Contracts isAdmin={this.state.isAdmin}/>} />
						<Route path="/user" element={<User isAdmin={this.state.isAdmin} userFilter={this.state.userFilter} setUserFilter={this.setUserFilter}/>} />
					</Routes>
					<UserDialogSelf open={this.state.dialogIsOpen} onClose={this.closeDialog} id={this.state.userid} />
				</div>
			);
		} else {
			return (
				<Login url={theUrl} authorized={this.authorized} isAdmin={this.isAdmin} notAdmin={this.notAdmin} setUser={this.setUser}></Login>
			);
		}
	}
}

export default withStyles(styles)(App);

