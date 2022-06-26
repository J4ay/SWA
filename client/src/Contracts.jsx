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
			dialogIsOpen: false,
			contId: "",
			contracts: [],
		};
	}

	deleteContract(id) {
		HttpService.deleteContract(id).then(res => {
			this.setState({ contracts: res });
		}
		);
		//window.location.reload(false);
	}

	openDialog = (id) => {
		this.setState({ dialogIsOpen: true });
		this.setState({ contID: id });
	  };


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

				{this.state.contracts&& this.state.contracts.map((contract) =>
				<table style={{background: "lightgray", width:"100%"}}>
					<tr className="tableRow" key={contract.contID} style={{background: "lightgray", width:"100%"}}>
						<td className="tableCell" style={{border: "1px solid grey", width: "4%"}}>{contract.contID}</td>
						<td className="tableCell" style={{border: "1px solid grey", width: "35%"}}>{contract.contractStartDate}</td>
						<td className="tableCell" style={{border: "1px solid grey", width: "35%"}}>{contract.contractEndDate}</td>
						<td className="tableCell" style={{border: "1px solid grey", width: "26%"}}>{contract.contractVersion}</td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.deleteContract(contract.contID)}>Delete</Button></td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.openDialog(contract.contID)}>Edit</Button></td>
					</tr>
				</table>
				)}

			</div>
		);
	}
}
export default withStyles(styles)(Contracts);

