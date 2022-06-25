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
		};
	}

	authorized = () => {
		this.setState({ loggedIn: true });
	}

	render() {
		if (this.state.loggedIn) {
			return (
				<div>
					<Button component={Link} to="/" variant="contained" color="primary" >Customers</Button>
					<Button component={Link} to="/contracts" variant="contained" color="primary" >Contracts</Button>
					<Button component={Link} to="/user" variant="contained" color="primary" >Users</Button>
					<Routes>
						<Route path="/" element={<Customer />} />
						<Route path="/contracts" element={<Contracts/>} />
						<Route path="/user" element={<User />} />
					</Routes>
				</div>
			);
		} else {
			return (
				<Login url={theUrl} authorized={this.authorized}></Login>
			);
		}
	}
}

export default withStyles(styles)(App);

