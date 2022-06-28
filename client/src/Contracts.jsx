import React from "react";
import { withStyles } from '@material-ui/core/styles';

import { Box, Button } from "@material-ui/core";
import ContractDialog from './ContractDialog'

import HttpService from "./HttpService";
import DetailsPopUp from "./DetailsPopUp";
import AddContract from "./AddContract";

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
			detailsIsOpen: false,
			addContractIsOpen: false,
			contracts: [],
			contract: {},
		};
	}

	deleteContract(id) {
		HttpService.deleteContract(id).then(res => {
			this.setState({ contracts: res });
		});
	}

	openDialog = (cont) => {
		this.setState({ dialogIsOpen: true });
		this.setState({ contract: cont });
	  };

	closeDialog = () => {
		this.setState({ dialogIsOpen: false });
	};

	openDetails = (cont) => {
		this.setState({ detailsIsOpen: true });
		this.setState({ contract: cont });
	};

	closeDetails = () => {
		this.setState({ detailsIsOpen: false });
	};

	addContractDialog = () => {
		this.setState({ addContractIsOpen: true });
	}

	closeAddContractDialog = () => {
		this.setState({ addContractIsOpen: false });
	}

	componentDidMount() {
		HttpService.getContracts().then(res => {
			this.setState({ contracts : res });
		});
	}


	render() {
		const { classes } = this.props;
		if(this.props.isAdmin) {
		return (
			<div className={classes.center}>
				<h1>Contracts </h1>

				{this.state.contracts&& this.state.contracts.map(contract =>{
				if(this.props.filter !== contract.contractCustomer && this.props.filter !== "") {return(<div></div>);}
				else {
					return(
				<table style={{background: "lightgray", width:"100%"}}>
					<tr className="tableRow" key={contract.contID} style={{background: "lightgray", width:"100%"}}>
						<td className="tableCell" style={{border: "1px solid grey", width: "20%"}}>{contract.contractCustomer}</td>
						<td className="tableCell" style={{border: "1px solid grey", width: "30%"}}>{contract.contractStartDate}</td>
						<td className="tableCell" style={{border: "1px solid grey", width: "30%"}}>{contract.contractEndDate}</td>
						<td className="tableCell" style={{border: "1px solid grey", width: "20%"}}>{contract.contractVersion}</td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.deleteContract(contract.contID)}>Delete</Button></td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.openDialog(contract)}>Edit</Button></td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.openDetails(contract)}>Details</Button></td>
					</tr>
				</table>);}
				})}
				
				<Button variant="contained" color="primary" onClick={()=>{this.addContractDialog()}}>Add Contract </Button>
				<AddContract open={this.state.addContractIsOpen} onClose={this.closeAddContractDialog}/>
				<ContractDialog open={this.state.dialogIsOpen} onClose={this.closeDialog} contract={this.state.contract}/>
				<DetailsPopUp open={this.state.detailsIsOpen} onClose={this.closeDetails} contract={this.state.contract}/>
			</div>
		);}
		else{
			return (
				<div className={classes.center}>
					<h1>Contracts </h1>
	
					{this.state.contracts&& this.state.contracts.map(contract =>{
				if(this.props.filter !== contract.contractCustomer && this.props.filter !== "") {return(<div></div>);}
				else {
					return(
				<table style={{background: "lightgray", width:"100%"}}>
					<tr className="tableRow" key={contract.contID} style={{background: "lightgray", width:"100%"}}>
						<td className="tableCell" style={{border: "1px solid grey", width: "20%"}}>{contract.contractCustomer}</td>
						<td className="tableCell" style={{border: "1px solid grey", width: "30%"}}>{contract.contractStartDate}</td>
						<td className="tableCell" style={{border: "1px solid grey", width: "30%"}}>{contract.contractEndDate}</td>
						<td className="tableCell" style={{border: "1px solid grey", width: "20%"}}>{contract.contractVersion}</td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.openDetails(contract)}>Details</Button></td>
					</tr>
				</table>);}
				})}
					<DetailsPopUp open={this.state.detailsIsOpen} onClose={this.closeDetails} contract={this.state.contract}/>
				</div>
			);}
	}
}
export default withStyles(styles)(Contracts);

