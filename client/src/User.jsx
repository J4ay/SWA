import React from "react";
import { withStyles } from '@material-ui/core/styles';

import PostList from './PostList'
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = theme => ({
	center: {
		display: 'block',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: 'calc(100vh - 40px)',
		border: '5px solid red',
		padding: '10px',
	}
});

class Home extends React.Component {

	constructor(props) {
		super(props);
	    this.state = {	  
            currentTab: 'Customers',
		};		
	}
	
	customersButtonPressed = () => {
		this.setState({currentTab: 'Customers'});
	}

	contractsButtonPressed = () => {
		this.setState({currentTab: 'Contracts'});
	}

	usersButtonPressed = () => {
		this.setState({currentTab: 'Users'});
	}
  
	render() {
		const { classes } = this.props;
			return (
			<div className={classes.center}>
				<h1>Users </h1>
				<PostList></PostList>
			</div>
			);
	}
}

export default withStyles(styles)(Home);

