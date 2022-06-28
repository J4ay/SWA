import React from "react";
import { withStyles } from '@material-ui/core/styles';

import { Box, Button } from "@material-ui/core";

import HttpService from "./HttpService";
import CustomerDialog from "./CustomerDialog";
import { Link } from "react-router-dom";
import AddCustomer from "./AddCustomer";

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
			dialogIsOpen: false,
			addCustomerDialog: false,
			custname: "",
			custID: "",
		};
	}

	deleteCustomer(id) {
		HttpService.deleteCustomer(id).then(res => {
			this.setState({ customers: res });
		}
		);
	}


	componentDidMount() {
		HttpService.getCustomers().then(res => {
			this.setState({ customers : res });
		});
	}

	openDialog = (name,id) => {
		this.setState({ dialogIsOpen: true });
		this.setState({ custname: name });
		this.setState({ custID: id });
	  };
	
	  closeDialog = () => {
		this.setState({ dialogIsOpen: false });
	  };

	openAddCustomerDialog = () => {
		this.setState({ addCustomerDialog: true });
	  }
	
	closeAddCustomerDialog = () => {
		this.setState({ addCustomerDialog: false });
	}

	render() {
		const { classes } = this.props;

			if (this.props.isAdmin === true) {
				return (
			<div className={classes.center}>
				<h1>Customers </h1>

				{this.state.customers&& this.state.customers.map((customer) =>
                <table style={{background: "lightgray", width:"100%"}}>
                    <tr className="tableRow" key={customer.custID} style={{background: "lightgray", width:"100%"}}>
                        <td className="tableCell" style={{border: "1px solid grey", width: "50%"}}>{customer.address}</td>
                        <td className="tableCell" style={{border: "1px solid grey", width: "25%"}}>{customer.department}</td>
                        <td className="tableCell" style={{border: "1px solid grey", width: "25%"}}>{customer.name}</td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.deleteCustomer(customer.custID)}>Delete</Button></td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.openDialog(customer.name,customer.custID)}>Edit</Button></td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" component={Link} to="/user" onClick={()=>{this.props.setFilter(customer.name)}}>User</Button></td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" component={Link} to="/contracts" onClick={()=>{this.props.setFilter(customer.name)}}>Contracts</Button></td>
					</tr>
                </table>
                )}
				
				<Button variant="contained" color="primary" onClick={()=>{this.openAddCustomerDialog()}}>Add Customer </Button>
				<AddCustomer open={this.state.addCustomerDialog} onClose={this.closeAddCustomerDialog}/>
				<CustomerDialog open={this.state.dialogIsOpen} onClose={this.closeDialog} customer={this.state.custname} id={this.state.custID}/>
			</div>
				);}
				
			else {
				return (
				<div className={classes.center}>
				<h1>Customers </h1>

				{this.state.customers&& this.state.customers.map((customer) =>
                <table style={{background: "lightgray", width:"100%"}}>
                    <tr className="tableRow" key={customer.custID} style={{background: "lightgray", width:"100%"}}>
                        <td className="tableCell" style={{border: "1px solid grey", width: "50%"}}>{customer.address}</td>
                        <td className="tableCell" style={{border: "1px solid grey", width: "25%"}}>{customer.department}</td>
                        <td className="tableCell" style={{border: "1px solid grey", width: "25%"}}>{customer.name}</td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" component={Link} to="/user" onClick={()=>{this.props.setFilter(customer.name)}}>User</Button></td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" component={Link} to="/contracts" onClick={()=>{this.props.setFilter(customer.name)}}>Contracts</Button></td>
					</tr>
                </table>
                )}

				<CustomerDialog open={this.state.dialogIsOpen} onClose={this.closeDialog} customer={this.state.custname} id={this.state.custID}/>
			</div>
				);
			}
	}
}

export default withStyles(styles)(Customer);

