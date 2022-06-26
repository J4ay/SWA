import React from "react";
import { withStyles } from '@material-ui/core/styles';

import { Box, Button } from "@material-ui/core";

import HttpService from "./HttpService";
import CustomerDialog from "./CustomerDialog";

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

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.center}>
				<Button variant="contained" color="primary" >Add Customer </Button>
				<h1>Customers </h1>

				{this.state.customers&& this.state.customers.map((customer) =>
                <table style={{background: "lightgray", width:"100%"}}>
                    <tr className="tableRow" key={customer.custID} style={{background: "lightgray", width:"100%"}}>
                        <td className="tableCell" style={{border: "1px solid grey", width: "4%"}}>{customer.custID}</td>
                        <td className="tableCell" style={{border: "1px solid grey", width: "46%"}}>{customer.address}</td>
                        <td className="tableCell" style={{border: "1px solid grey", width: "25%"}}>{customer.department}</td>
                        <td className="tableCell" style={{border: "1px solid grey", width: "25%"}}>{customer.name}</td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.deleteCustomer(customer.custID)}>Delete</Button></td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.openDialog(customer.name,customer.custID)}>Edit</Button></td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => console.log("Filter Users by customer name")}>User</Button></td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => console.log("Filter contracts by customer name")}>Contracts</Button></td>
					</tr>
                </table>
                )}

				<CustomerDialog open={this.state.dialogIsOpen} onClose={this.closeDialog} customer={this.state.custname} id={this.state.custID}/>
			</div>
		);
	}
}

export default withStyles(styles)(Customer);

