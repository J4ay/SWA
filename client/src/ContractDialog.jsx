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

export default function UserDialog(props) {
  const { open, onClose , id} = props;

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Contract Details {id}</DialogTitle>
        <DialogContent>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}>
          <TextField
            autoFocus
            margin="dense"
            id="contractStartDate"
            label="Start Date"
            type="startDate"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="contractEndDate"
            label="End Date"
            type="endDate"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="contractUser1"
            label="Responsible User 1"
            type="user"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="contractUser2"
            label="Responsible User 2"
            type="user"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="contractVersion"
            label="Version"
            type="version"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="contractNumFeature1"
            label="Feature 1"
            type="numFeature"
            variant="standard"
          />
         <TextField
            margin="dense"
            id="contractNumFeature2"
            label="Feature 2"
            type="numFeature"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="contractNumFeature3"
            label="Feature 3"
            type="numFeature"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="contractIPs1"
            label="IP Number"
            type="IPs"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="contractIPs2"
            label="IP Number"
            type="IPs"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="contractIPs3"
            label="IP Number"
            type="IPs"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="contractLicenseKey"
            label="License Key"
            type="licenseKey"
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