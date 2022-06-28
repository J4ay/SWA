import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box } from '@mui/material';
import HttpService from './HttpService';

function save() {
}

export default function ContractDialog(props) {
  //TODO: get contract from props
  const { open, onClose , contract } = props;

  const [startDate, setStartDate] = React.useState(contract.contractStartDate);
  const [endDate, setEndDate] = React.useState(contract.contractEndDate);

  

  //var startDate;
  //var endDate;
  var user1 = contract.contractUser1;
  var user2 = contract.contractUser2;
  var version = contract.contractVersion;
  var feature1 = contract.contractNumFeature1;
  var feature2 = contract.contractNumFeature2;
  var feature3 = contract.contractNumFeature3;
  var ip1 = contract.contractIp1;
  var ip2 = contract.contractIp2;
  var ip3 = contract.contractIp3;
  var licenseKey = contract.contractLicenseKey;

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

    console.log("Id: " + contract.contID);
    console.log("startDate: " + startDate);
    console.log("endDate: " + endDate);
    console.log("ip1: " + ip1);
    console.log("ip2: " + ip2);
    console.log("ip3: " + ip3);
    console.log("version: " + version);
    console.log("feature1: " + feature1);
    console.log("feature2: " + feature2);
    console.log("feature3: " + feature3);
    console.log("user1: " + user1);
    console.log("user2: " + user2);
    console.log("licenseKey: " + licenseKey);
    console.log("contractId: " + contract.contractCustomer);

    //var userString1 = user1.toString();
    //var userString2 = user2.toString();
    HttpService.updateContract(contract.contID, startDate, endDate, ip1, ip2, ip3, version, feature1, feature2, feature3, user1, user2, licenseKey, contract.contractCustomer)

    onClose();
  }


  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Contract Details {contract.contId}</DialogTitle>
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
            id="contractUser1"
            label="User ID 1"
            type="user"
            variant="standard"
            defaultValue={contract.contractUser1}
            onChange={(event) => handleUser1FieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractUser2"
            label="User ID 2"
            type="user"
            variant="standard"
            defaultValue={contract.contractUser2}
            onChange={(event) => handleUser2FieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractVersion"
            label="Version"
            type="version"
            variant="standard"
            defaultValue={contract.contractVersion}
            onChange={(event) => handleVersionFieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractNumFeature1"
            label="Feature 1"
            type="numFeature"
            variant="standard"
            defaultValue={contract.contractNumFeature1}
            onChange={(event) => handleFeature1FieldChange(event)}
          />
         <TextField
            margin="dense"
            id="contractNumFeature2"
            label="Feature 2"
            type="numFeature"
            variant="standard"
            defaultValue={contract.contractNumFeature2}
            onChange={(event) => handleFeature2FieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractNumFeature3"
            label="Feature 3"
            type="numFeature"
            variant="standard"
            defaultValue={contract.contractNumFeature3}
            onChange={(event) => handleFeature3FieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractIPs1"
            label="IP Number"
            type="IPs"
            variant="standard"
            defaultValue={contract.contractIp1}
            onChange={(event) => handleIp1FieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractIPs2"
            label="IP Number"
            type="IPs"
            variant="standard"
            defaultValue={contract.contractIp2}
            onChange={(event) => handleIp2FieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractIPs3"
            label="IP Number"
            type="IPs"
            variant="standard"
            defaultValue={contract.contractIp3}
            onChange={(event) => handleIp3FieldChange(event)}
          />
          <TextField
            margin="dense"
            id="contractLicenseKey"
            label="License Key"
            type="licenseKey"
            variant="standard"
            defaultValue={contract.contractLicenseKey}
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