import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';


export default function DetailsPopUp(props) {
    const { open, onClose, contract } = props;

    const getIp2 = () => {
        if(contract.ip2) {
            return contract.ip2;
        }
        return "-";
    }
    const getIp3 = () => {
        if(contract.ip3) {
            return contract.ip3;
        }
        return "-";
    }

    const getNumFeature1 = () => {
        if(contract.numFeature1) {
            return contract.numFeature1;
        }
        return "-";
    }
    const getNumFeature2 = () => {
        if(contract.numFeature2) {
            return contract.numFeature2;
        }
        return "-";
    }
    const getNumFeature3 = () => {
        if(contract.numFeature3) {
            return contract.numFeature3;
        }
        return "-";
    }

    const getUser1 = () => {
        if(contract.user1) {
            return contract.user1;
        }
        return "-";
    }
    const getUser2 = () => {
        if(contract.user2) {
            return contract.user2;
        }
        return "-";
    }
    

    return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Contract Details {contract.contID}</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            '& .MuiTypography-root': { m: 1, width: '50%' },
                        }}>
                        <Typography>
                            Customer: {contract.contractCustomer}
                        </Typography>
                        <Typography>
                            Start Date: {contract.contractStartDate}
                        </Typography>
                        <Typography>
                            End Date: {contract.contractEndDate}
                        </Typography>
                        <Typography>
                            IP 1: {contract.contractIp1}
                        </Typography>
                        <Typography>
                            IP 2: {getIp2()}
                        </Typography>
                        <Typography>
                            IP 3: {getIp3()}
                        </Typography>
                        <Typography>
                            License Key: {contract.contractLicenseKey}
                        </Typography>
                        <Typography>
                            Num Feature 1: {getNumFeature1()}
                        </Typography>
                        <Typography>
                            Num Feature 2: {getNumFeature2()}
                        </Typography>
                        <Typography>
                            Num Feature 3: {getNumFeature3()}
                        </Typography>
                        <Typography>
                            User 1: {getUser1()}
                        </Typography>
                        <Typography>
                            User 2: {getUser2()}
                        </Typography>
                        <Typography>
                            Version: {contract.contractVersion}
                        </Typography>
                    </Box>

                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}