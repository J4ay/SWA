import React from "react";
import { withStyles } from '@material-ui/core/styles';

import Login from './Login';
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
			filter: "",
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

	setFilter = (filter) => {
		this.setState({ filter: filter });
	}

	adminText = () => {
		if(this.state.isAdmin) {
			return "Admin";
		}
		return "User";
	}

	render() {
		if (this.state.loggedIn) {
			return (
				<div>
					<Button component={Link} to="/" variant="contained" color="primary" onClick={()=>{this.setFilter("")}}>Customers</Button>
					<Button component={Link} to="/contracts" variant="contained" color="primary" onClick={()=>{this.setFilter("")}}>Contracts</Button>
					<Button component={Link} to="/user" variant="contained" color="primary" onClick={()=>{this.setFilter("")}}>Users</Button>
					<Button variant="contained" color="secondary" sx={{float:"right"}} onClick={()=>{this.setState({ loggedIn: false })}}>Logout</Button>
					<IconButton sx={{ mr: 1 }} onClick={() => {this.openDialog(); this.setFilter("")}}>
						{this.adminText()}
						<AccountCircleIcon sx={{ fontSize: 40 }} />
					</IconButton>
					<Routes>
						<Route path="/" element={<Customer isAdmin={this.state.isAdmin} setFilter={this.setFilter}/>} />
						<Route path="/contracts" element={<Contracts isAdmin={this.state.isAdmin} filter={this.state.filter} />} />
						<Route path="/user" element={<User isAdmin={this.state.isAdmin} filter={this.state.filter} />} />
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

