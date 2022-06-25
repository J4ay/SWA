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

class Customer extends React.Component {

	constructor(props) {
		super(props);
	    this.state = {	  
            customers: [],
		};		
	}

	getCustomers() {
		fetch( "localhost:8080" + "/users", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
            },
            method: 'get',
        }).then(function(response) {
			console.dir(response.json());
			return response.json();
		})
	}

	componentDidMount() {
		this.getCustomers();
	}
	
  
	render() {
		const { classes } = this.props;
			return (
			<div className={classes.center}>
				<Button variant="contained" color="primary" >Add Customer </Button>
				<h1>Customers </h1>
			</div>
			);
	}
}

export default withStyles(styles)(Customer);

