import React from "react";
import { withStyles } from '@material-ui/core/styles';

import Login from './Login';
import Home from './Home'
import Customer from './Customer'
import User from './User';

import Button from '@material-ui/core/Button';

import { Routes, Route, Link } from "react-router-dom";
import Contracts from "./Contracts";

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
		};
	}

	authorized = () => {
		this.setState({ loggedIn: true });
	}

	isAdmin = () => {
		this.setState({ isAdmin: true });
	}

	notAdmin = () => {
		this.setState({ isAdmin: false });
	}

	render() {
		if (this.state.loggedIn) {
			return (
				<div>
					<Button component={Link} to="/" variant="contained" color="primary" >Customers</Button>
					<Button component={Link} to="/contracts" variant="contained" color="primary" >Contracts</Button>
					<Button component={Link} to="/user" variant="contained" color="primary" >Users</Button>
					<Button variant="contained" color="secondary" sx={{float:"right"}} onClick={()=>{this.setState({ loggedIn: false })}}>Logout</Button>
					<Routes>
						<Route path="/" element={<Customer isAdmin={this.state.isAdmin}/>} />
						<Route path="/contracts" element={<Contracts isAdmin={this.state.isAdmin}/>} />
						<Route path="/user" element={<User isAdmin={this.state.isAdmin}/>} />
					</Routes>
				</div>
			);
		} else {
			return (
				<Login url={theUrl} authorized={this.authorized} isAdmin={this.isAdmin} notAdmin={this.notAdmin}></Login>
			);
		}
	}
}

export default withStyles(styles)(App);

