import React from "react";
import { withStyles } from '@material-ui/core/styles';

import PostList from './PostList'
import { Box, Button } from "@material-ui/core";
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

class Customer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			customers: [],
		};
	}



	componentDidMount() {
		HttpService.getCustomers().then(res => {
			this.setState({ customers : res });
		});
		// console.log(this.state.customers);
		// if (this.state.customers.length === 0) {
		// 	this.state.customers = this.getCustomers();
		// }
	}


	render() {
		const { classes } = this.props;
		return (
			<div className={classes.center}>
				<Button variant="contained" color="primary" >Add Customer </Button>
				<h1>Customers </h1>

				{this.state.customers&& this.state.customers.map((cus, i) =>
				 <Box key={i}>{cus.name}</Box>
				)}

			</div>
		);
	}
}

export default withStyles(styles)(Customer);

