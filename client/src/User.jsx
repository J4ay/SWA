import React from "react";
import { withStyles } from '@material-ui/core/styles';

import { Button, Box } from "@material-ui/core";

import HttpService from "./HttpService";
import UserDialog from "./UserDialog";

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
			dialogIsOpen: false,
			userId: "",
			users: [],
			user: {},
		};
	}

	deleteUser(id) {
		HttpService.deleteUser(id).then(res => {
			this.setState({ users: res });
		});
	}

	openDialog = (user) => {
		this.setState({ dialogIsOpen: true });
		this.setState({ user: user });
	  };

	closeDialog = () => {
		this.setState({ dialogIsOpen: false });
	};

	componentDidMount() {
		HttpService.getUsers().then(res => {
			this.setState({ users : res });
		});

	}


	render() {
		const { classes } = this.props;
		if(this.props.isAdmin) {
		return (
			<div className={classes.center}>
				<h1>Users </h1>

				{this.state.users&& this.state.users.map(user => {
				if(this.props.filter !== user.customerName && this.props.filter !== "") {return(<div></div>);}
				else {  
				return (
				<table style={{background: "lightgray", width:"100%"}}>
					<tr className="tableRow" key={user.id} style={{background: "lightgray", width:"100%"}}>
						<td className="tableCell" style={{border: "1px solid grey", width: "33%"}}>{user.customerName}</td>
						<td className="tableCell" style={{border: "1px solid grey", width: "33%"}}>{user.firstName + " " + user.lastName}</td>
						<td className="tableCell" style={{border: "1px solid grey", width: "33%"}}>{user.mail}</td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.deleteUser(user.id)}>Delete</Button></td>
						<td><Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.openDialog(user)}>Edit</Button></td>
					</tr>
				</table>);
				}
				})
				}
				
				<Button variant="contained" color="primary" >Add User </Button>

				<UserDialog open={this.state.dialogIsOpen} onClose={this.closeDialog} user={this.state.user} />
			</div>
		);}
		else {
			return (
				<div className={classes.center}>
					<h1>Users </h1>
	
					{this.state.users&& this.state.users.map(user => {
				if(this.props.filter !== user.customerName && this.props.filter !== "") {return(<div></div>);}
				else {  
				return (
				<table style={{background: "lightgray", width:"100%"}}>
					<tr className="tableRow" key={user.id} style={{background: "lightgray", width:"100%", height:"38px"}}>
						<td className="tableCell" style={{border: "1px solid grey", width: "33%"}}>{user.customerName}</td>
						<td className="tableCell" style={{border: "1px solid grey", width: "33%"}}>{user.firstName + " " + user.lastName}</td>
						<td className="tableCell" style={{border: "1px solid grey", width: "33%"}}>{user.mail}</td>
					</tr>
				</table>);
				}
				})
				}
				</div>
			);}

	}
}
export default withStyles(styles)(User);

