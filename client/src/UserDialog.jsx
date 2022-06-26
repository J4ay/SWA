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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function UserDialog(props) {
  const { open, onClose , user } = props;

  //TODO: HttpService.getUser(id)

  console.log(user);

  const [userCustName, setUserCustName] = React.useState(user.customerName);
  const [userFirstName, setUserFirstName] = React.useState(user.firstName);
  const [userLastName, setUserLastName] = React.useState(user.lastName);
  const [userEmail, setUserEmail] = React.useState(user.mail);
  const [userPhoneNr, setUserPhoneNr] = React.useState(user.phoneNumber1);
  const [userPhoneNr2, setUserPhoneNr2] = React.useState(user.phoneNumber1);
  const [isAdmin, setIsAdmin] = React.useState(user.admin);
  
  const handleCustNameFieldChange = (event) => {
    setUserCustName(event.target.value);
  }

  const handleFirstNameFieldChange = (event) => {
    setUserFirstName(event.target.value);
  }

  const handleLastNameFieldChange = (event) => {
    setUserLastName(event.target.value);
  }

  const handleEmailFieldChange = (event) => {
    setUserEmail(event.target.value);
  }

  const handlePhoneNrFieldChange = (event) => {
    setUserPhoneNr(event.target.value);
  }

  const handlePhoneNr2FieldChange = (event) => {
    setUserPhoneNr2(event.target.value);
  }

  const handleAdminCheckboxChange = (event) => {
    setIsAdmin(event.target.checked);
  }

  const onSave = () => {
    console.log(user.id + user.username + user.password + userFirstName + userLastName + userEmail + userPhoneNr + userPhoneNr2 + isAdmin + userCustName);
    console.log("Nr 1: " + userPhoneNr);
    HttpService.updateUser(user.id, user.username, user.password, userFirstName, userLastName, userEmail, userPhoneNr, userPhoneNr2, isAdmin, userCustName);

    onClose();
  }
  
    return (
      <div>
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>Edit User {user.id}</DialogTitle>
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
              id="userCustomer"
              label="Customer Name"
              type="sutomerName"
              variant="standard"
              defaultValue={user.customerName}
              onChange={(event) => handleCustNameFieldChange(event)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="userFirstName"
              label="First Name"
              type="firstName"
              variant="standard"
              defaultValue={user.firstName}
              onChange={(event) => handleFirstNameFieldChange(event)}
            />
            <TextField
              margin="dense"
              id="userLastName"
              label="Last Name"
              type="lastName"
              variant="standard"
              defaultValue={user.lastName}
              onChange={(event) => handleLastNameFieldChange(event)}
            />
            <TextField
              margin="dense"
              id="userMail"
              label="E-Mail"
              type="email"
              variant="standard"
              defaultValue={user.mail}
              onChange={(event) => handleEmailFieldChange(event)}
            />
            <TextField
              margin="dense"
              id="userPhoneNr1"
              label="Phone (1)"
              type="phoneNr1"
              variant="standard"
              defaultValue={user.phoneNumber1}
              onChange={(event) => handlePhoneNrFieldChange(event)}
            />
            <TextField
              margin="dense"
              id="userPhoneNr2"
              label="Phone (2)"
              type="phoneNr2"
              variant="standard"
              defaultValue={user.phoneNumber2}
              onChange={(event) => handlePhoneNr2FieldChange(event)}
            />
            <FormGroup>
          <FormControlLabel checked={user.admin} onChange={(event) => handleAdminCheckboxChange(event)}control={<Checkbox />} label="Is Administrator" />
          </FormGroup>
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