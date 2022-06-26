import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function UserDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen} />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit User {username}</DialogTitle>
          <DialogContent>
            <DialogContentText>
  
            </DialogContentText>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }