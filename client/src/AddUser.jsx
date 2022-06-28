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

async function getId() {
    const res = await HttpService.getNewUserId();
    return res;
}


export default function AddUser(props) {
  const { open, onClose  } = props;

  const [disableSave, setDisableSave] = React.useState(false);
    const [id, setId] = React.useState('');

    React.useEffect(() => {
        getId().then(res => {
            setId(res);
        })
    });

  //TODO: HttpService.getUser(id)
  //TODO: ADD enable only when non optional fields are filled
  //TODO: pwd username sollen geändert werden können
  //TODO: userdialogself nur pwd


  var password = "";
  var userName = "";
  var userCustName = "";
  var userFirstName = "";
  var userLastName = "";
  var userEmail = "";
  var userPhoneNr = "";
  var userPhoneNr2 = "";
  var isAdmin = false;

  const handlePasswordFieldChange = (event) => {
    password = event.target.value;

    }
    const handleUserNameFieldChange = (event) => {
        userName = event.target.value;
   
    }
  
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
    if(password === "" || userName === "" || userCustName === "" || userFirstName === "" || userLastName === "" || userEmail === "" || userPhoneNr === "" || userPhoneNr2 === ""){
      alert("Please fill all fields");
      return;
    }

    if(userPhoneNr2 === "") {
        userPhoneNr2 = "-"
    }

    console.log("userId: " + id);
    console.log("password: " + password);
    console.log("userName: " + userName);
    console.log("userCustName: " + userCustName);
    console.log("userFirstName: " + userFirstName);
    console.log("userLastName: " + userLastName);
    console.log("userEmail: " + userEmail);
    console.log("userPhoneNr: " + userPhoneNr);
    console.log("userPhoneNr2: " + userPhoneNr2);
    console.log("isAdmin: " + isAdmin);


    HttpService.createUser(id, userName, password, userFirstName, userLastName, userEmail, userPhoneNr, userPhoneNr2, isAdmin, userCustName);

    onClose();
  }
  
    return (
      <div>
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>Add User</DialogTitle>
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
              id="userName"
              label="User Name"
              type="userName"
              variant="standard"
              onChange={(event) => handleUserNameFieldChange(event)}
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              variant="standard"
              onChange={(event) => handlePasswordFieldChange(event)}
            />
            <TextField
              margin="dense"
              id="userCustomer"
              label="Customer Name"
              type="customerName"
              variant="standard"
              onChange={(event) => handleCustNameFieldChange(event)}
            />
            <TextField
              margin="dense"
              id="userFirstName"
              label="First Name"
              type="firstName"
              variant="standard"
              onChange={(event) => handleFirstNameFieldChange(event)}
            />
            <TextField
              margin="dense"
              id="userLastName"
              label="Last Name"
              type="lastName"
              variant="standard"
              onChange={(event) => handleLastNameFieldChange(event)}
            />
            <TextField
              margin="dense"
              id="userMail"
              label="E-Mail"
              type="email"
              variant="standard"
              onChange={(event) => handleEmailFieldChange(event)}
            />
            <TextField
              margin="dense"
              id="userPhoneNr1"
              label="Phone (1)"
              type="phoneNr1"
              variant="standard"
              onChange={(event) => handlePhoneNrFieldChange(event)}
            />
            <TextField
              margin="dense"
              id="userPhoneNr2"
              label="Phone (2)"
              type="phoneNr2"
              variant="standard"
              onChange={(event) => handlePhoneNr2FieldChange(event)}
            />
            <FormGroup>
          <FormControlLabel control={<Checkbox onChange={(event) => handleAdminCheckboxChange(event)}/>} label="Is Administrator" />
          </FormGroup>
           </Box>

          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onSave} disabled={disableSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }