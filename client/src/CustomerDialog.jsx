import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

function save() {
}

export default function CustomerDialog(props) {
    const { open, onClose, customer , id} = props;
  
    return (
      <div>
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>Edit Customer {customer} {id}</DialogTitle>
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
            />
            <TextField
              margin="dense"
              id="department"
              label="Department"
              type="department"
              variant="standard"
            />
            <TextField
              margin="dense"
              id="address"
              label="Address"
              type="address"
              variant="standard"
            />
                    </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={this.save()}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }