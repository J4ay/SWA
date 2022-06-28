import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box } from '@mui/material';
import HttpService from './HttpService';

async function getId() {
    const res = await HttpService.getNewContractId();
    return res;
}


export default function AddContract(props) {
  //TODO: get contract from props
  const { open, onClose } = props;

  const [startDate, setStartDate] = React.useState(new Date('2022-08-18T21:11:54'));
  const [endDate, setEndDate] = React.useState(new Date('2022-08-18T21:11:54'));

  const [id, setId] = React.useState('');

  React.useEffect(() => {
    getId().then(res => {
      setId(res);
    }
    );
  }, []);

  //var startDate;
  //var endDate;
  var customer = '';
  var user1 = 0;
  var user2 = 0;
  var version = '';
  var feature1  = 0;
  var feature2  = 0;
  var feature3  = 0;
  var ip1 = '';
  var ip2 = '';
  var ip3 = '';
  var licenseKey  = '';

  const handleCustNameFieldChange = (event) => {
    customer = event.target.value;
  }

  const handleStartDateChange = (dateNew) => {
    setStartDate(dateNew);
  }

  const handleEndDateChange = (dateNew) => {
    setEndDate(dateNew);
  }

  const handleUser1FieldChange = (event) => {
    user1 = event.target.value;
  }

  const handleUser2FieldChange = (event) => {
    user2 = event.target.value;
  }

  const handleVersionFieldChange = (event) => {
    version = event.target.value;
  }

  const handleFeature1FieldChange = (event) => {
    feature1 = event.target.value;
  }

  const handleFeature2FieldChange = (event) => {
    feature2 = event.target.value;
  }

  const handleFeature3FieldChange = (event) => {
    feature3 = event.target.value;
  }

  const handleIp1FieldChange = (event) => {
    ip1 = event.target.value;
  }

  const handleIp2FieldChange = (event) => {
    ip2 = event.target.value;
  }

  const handleIp3FieldChange = (event) => {
    ip3 = event.target.value;
  }

  const handleLicenseKeyFieldChange = (event) => {
    licenseKey = event.target.value;
  }

  const onSave = () => {
    if (customer === '' || user1 === '' || user2 === '' || version === '' || feature1 === '' || feature2 === '' || feature3 === '' || ip1 === '' || ip2 === '' || ip3 === '' || licenseKey === '') {
      alert('Please fill all fields');
      return;
    }

    if ( ip2 === "")
      ip2 = "-";
    if ( ip3 === "")
      ip3 = "-";


    console.log("startDate: " + startDate);
    console.log("endDate: " + endDate);
    console.log("user1: " + user1);
    console.log("user2: " + user2);
    console.log("version: " + version);
    console.log("feature1: " + feature1);
    console.log("feature2: " + feature2);
    console.log("feature3: " + feature3);
    console.log("ip1: " + ip1);
    console.log("ip2: " + ip2);
    console.log("ip3: " + ip3);
    console.log("licenseKey: " + licenseKey);

    HttpService.createContract(id, startDate, endDate, customer, user1, user2, version, feature1, feature2, feature3, ip1, ip2, ip3, licenseKey);

    onClose();
  }


  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Add Contract</DialogTitle>
        <DialogContent>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
        label="Start"
        id="contractStartDate"
        value={startDate}
        onChange={(newDate) => {
          setStartDate(newDate);
          handleStartDateChange(newDate);
        }}
        renderInput={(params) => <TextField {...params} />}
        />

        <DatePicker
        label="End"
        value={endDate}
        id="contractEndDate"
        onChange={(newDate) => {
          setEndDate(newDate);
          handleEndDateChange(newDate);
        }}
        renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        <TextField
            margin="dense"
            id="customer"
            label="Customer"
            type="customer"
            variant="standard"
            onChange={(event) => handleCustNameFieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractUser1"
            label="User ID 1"
            type="user"
            variant="standard"
            onChange={(event) => handleUser1FieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractUser2"
            label="User ID 2"
            type="user"
            variant="standard"
            onChange={(event) => handleUser2FieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractVersion"
            label="Version"
            type="version"
            variant="standard"
            onChange={(event) => handleVersionFieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractNumFeature1"
            label="Feature 1"
            type="numFeature"
            variant="standard"
            onChange={(event) => handleFeature1FieldChange(event)}
          />
         <TextField
            margin="dense"
            id="contractNumFeature2"
            label="Feature 2"
            type="numFeature"
            variant="standard"
            onChange={(event) => handleFeature2FieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractNumFeature3"
            label="Feature 3"
            type="numFeature"
            variant="standard"
            onChange={(event) => handleFeature3FieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractIPs1"
            label="IP Number"
            type="IPs"
            variant="standard"
            onChange={(event) => handleIp1FieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractIPs2"
            label="IP Number"
            type="IPs"
            variant="standard"
            onChange={(event) => handleIp2FieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractIPs3"
            label="IP Number"
            type="IPs"
            variant="standard"
            onChange={(event) => handleIp3FieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractLicenseKey"
            label="License Key"
            type="licenseKey"
            variant="standard"
            onChange={(event) => handleLicenseKeyFieldChange(event)}
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