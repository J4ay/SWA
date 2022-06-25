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
	
	status( response ) {
        if ( response.status >= 200 && response.status < 300 ) {
            return Promise.resolve( response )
        } else {
            return Promise.reject( new Error( response.statusText ) )
        }
    }

	processData = ( data ) => {
		console.log( "processData", data );
		let tid = data.id;
		if ( tid !== 0 ) {
		}
    }

	getCustomers() {
        fetch( "http://localhost:8080/customer", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'get',
        })
		.then( this.status )
		.then( function(response) { return response.json() } )
		.then( this.processData )
		.catch( function( error ) {
			console.log( 'Request failed', error );
		});
	}

	componentDidMount() {
	}
	
  
	render() {
		const { classes } = this.props;
			return (
			<div className={classes.center}>
				<Button variant="contained" color="primary" onClick={()=>{this.getCustomers();
				}}>Add Customer </Button>
				<h1>Customers </h1>
			</div>
			);
	}
}

export default withStyles(styles)(Customer);

