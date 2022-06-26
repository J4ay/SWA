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

    const isEmpty = (x) => {
        if(x) {
            return x;
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
                            IP 2: {isEmpty(contract.contractIp2)}
                        </Typography>
                        <Typography>
                            IP 3: {isEmpty(contract.contractIp3)}
                        </Typography>
                        <Typography>
                            License Key: {contract.contractLicenseKey}
                        </Typography>
                        <Typography>
                            Num Feature 1: {isEmpty(contract.contractNumFeature1)}
                        </Typography>
                        <Typography>
                            Num Feature 2: {isEmpty(contract.contractNumFeature2)}
                        </Typography>
                        <Typography>
                            Num Feature 3: {isEmpty(contract.contractNumFeature3)}
                        </Typography>
                        <Typography>
                            User 1: {isEmpty(contract.contractUser1)}
                        </Typography>
                        <Typography>
                            User 2: {isEmpty(contract.contractUser2)}
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