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

class Contracts extends React.Component {

	constructor(props) {
		super(props);
	    this.state = {	  
			contracts: [],
		};
	}



	componentDidMount() {
		HttpService.getContracts().then(res => {
			this.setState({ contracts : res });
		});
	}


	render() {
		const { classes } = this.props;
		return (
			<div className={classes.center}>
				<Button variant="contained" color="primary" >Add Contract </Button>
				<h1>Contracts </h1>

				{this.state.contracts&& this.state.contracts.map((con, i) =>
				 <Box key={i}>{con.contID}</Box>
				)}

			</div>
		);
	}
}
export default withStyles(styles)(Contracts);

