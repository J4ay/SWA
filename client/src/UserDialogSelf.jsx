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

export default function UserDialogSelf(props) {
  const { open, onClose , user } = props;

  //TODO: HttpService.getUser(id)
  //TODO: ADD enable only when non optional fields are filled
  //TODO: pwd username sollen geändert werden können
  //TODO: userdialogself nur pwd

  var userCustName = user.customerName;
  var userFirstName= user.firstName;
  var userLastName= user.lastName;
  var userEmail= user.mail;
  var userPhoneNr = user.phoneNumber1;
  var userPhoneNr2 = user.phoneNumber1;
  var isAdmin = user.admin;
  
  const handleCustNameFieldChange = (event) => {
    userCustName = event.target.value;
  }

  const handleFirstNameFieldChange = (event) => {
    userFirstName = event.target.value;
  }

  const handleLastNameFieldChange = (event) => {
    userLastName = event.target.value;
  }

  const handleEmailFieldChange = (event) => {
    userEmail = event.target.value;
  }

  const handlePhoneNrFieldChange = (event) => {
    userPhoneNr = event.target.value;
  }

  const handlePhoneNr2FieldChange = (event) => {
    userPhoneNr2 = event.target.value;
  }

  const handleAdminCheckboxChange = (event) => {
    isAdmin = event.target.checked;
  }

  const onSave = () => {
    console.log("Id: " + user.id);
    console.log("Username: " + user.username);
    console.log("Password: " + user.password);
    console.log("FirstName: " + userFirstName);
    console.log("LastName: " + userLastName);
    console.log("Email: " + userEmail);
    console.log("PhoneNr: " + userPhoneNr);
    console.log("PhoneNr2: " + userPhoneNr2);
    console.log("IsAdmin: " + isAdmin);
    console.log("CustName: " + userCustName);

    HttpService.updateUser(user.id, user.username, user.password, userFirstName, userLastName, userEmail, userPhoneNr, userPhoneNr2, isAdmin, userCustName);

    onClose();
  }
    if(user.admin) {
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
          <FormControlLabel control={<Checkbox defaultChecked={isAdmin} onChange={(event) => handleAdminCheckboxChange(event)}/>} label="Is Administrator" />
          </FormGroup>
           </Box>

          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );}
    else {
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
            </FormGroup>
             </Box>
  
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onSave}>Save</Button>
            </DialogActions>
          </Dialog>
        </div>
        );}

  }