import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import HttpService from './HttpService';
import Customer from './Customer';

function save() {
}

export default function AddCustomer(props) {
    const { open, onClose} = props;

    const [custName, setCustName] = React.useState('');
    const [custDepartment, setCustDepartment] = React.useState('');
    const [custAddress, setCustAddress] = React.useState('');

    const handleNameFieldChange = (event) => {
        setCustName(event.target.value);
    }

    const handleDepartmentFieldChange = (event) => {
      setCustDepartment(event.target.value);
    }

    const handleAddressFieldChange = (event) => {
      setCustAddress(event.target.value);
    }

    const onSave = () => {
      HttpService.updateCustomer(id, custName, custDepartment, custAddress);

      onClose();
    }
  
    return (
      <div>
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>Add Customer</DialogTitle>
          <DialogContent>
          <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
            >

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Customer Name"
              type="name"
              variant="standard"
              onChange={(event) => handleNameFieldChange(event)}
            />
            <TextField
              margin="dense"
              id="department"
              label="Department"
              type="department"
              variant="standard"
              onChange={(event) => handleDepartmentFieldChange(event)}
            />
            <TextField
              margin="dense"
              id="address"
              label="Address"
              type="address"
              variant="standard"
              onChange={(event) => handleAddressFieldChange(event)}
            />
                    </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }