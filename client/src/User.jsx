import React from "react";
import { withStyles } from '@material-ui/core/styles';

import PostList from './PostList'
import { Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import HttpService from "./HttpService";

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

class User extends React.Component {

	constructor(props) {
		super(props);
	    this.state = {	  
			users: [],
		};
	}



	componentDidMount() {
		HttpService.getUsers().then(res => {
			this.setState({ users : res });
		});
	}


	render() {
		const { classes } = this.props;
		return (
			<div className={classes.center}>
				<Button variant="contained" color="primary" >Add User </Button>
				<h1>users </h1>

				{this.state.users&& this.state.users.map((use, i) =>
				 <Box key={i}>{use.username}: {use.firstName}</Box>
				)}

			</div>
		);
	}
}
export default withStyles(styles)(User);

