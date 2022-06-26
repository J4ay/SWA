import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

export default function UserDialogSelf(props) {
  const { open, onClose , id} = props;
  
  
    return (
      <div>
        <Button variant="outlined" onClick={onClose} />
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>Edit User {id}</DialogTitle>
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
              id="userFirstName"
              label="First Name"
              type="firstName"
              variant="standard"
            />
            <TextField
              margin="dense"
              id="userLastName"
              label="Last Name"
              type="lastName"
              variant="standard"
            />
            <TextField
              margin="dense"
              id="userMail"
              label="E-Mail"
              type="email"
              variant="standard"
            />
            <TextField
              margin="dense"
              id="userPhoneNr1"
              label="Phone (1)"
              type="phoneNr1"
              variant="standard"
            />
            <TextField
              margin="dense"
              id="userPhoneNr2"
              label="Phone (2)"
              type="phoneNr2"
              variant="standard"
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              variant="standard"
            />
           </Box>

          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }