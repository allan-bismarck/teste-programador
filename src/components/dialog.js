import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {

  const handleClose = () => {
    props.setOpen(false);
    if(props.deleted) {
      window.location.reload();
    }
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Aviso"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.msg}
          </DialogContentText>
        </DialogContent>
        <Button onClick={handleClose}>Fechar</Button>
        <DialogActions>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}