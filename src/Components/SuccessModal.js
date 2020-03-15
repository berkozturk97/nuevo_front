import React from 'react';

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    paperModal: {
        width: 400,
        borderRadius: 10,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid 4F34A3',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    alertButton: {
        backgroundColor: '#191919',
        color: '#FAFAFA'
    },
    helperText: {
        color: 'red'
    }
}));



export default function SuccessModal(props) {
    const classes = useStyles();
    const rootRef = React.useRef(null);
    return (
        <Modal
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            open={props.openSuccess}
            onClose={props.closePopUpSuccess}
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            className={classes.modal}
            container={() => rootRef.current}
        >
            <div className={classes.paperModal}>
                <div className={classes.paper} style={{ marginTop: 0 }}>
                    <CheckCircleOutlineIcon style={{ alignSelf: 'center', marginTop: 0, fontSize: 60, marginBottom: 20, color: '#191919' }} />
                    <h2 id="server-modal-title" className={classes.paper} style={{ marginTop: 0 }}>İşlem Başarılı!</h2>
                    <p id="server-modal-description" className={classes.paper} style={{ marginTop: 0 }}>{props.successInfo}</p>
                    <Button
                        onClick={props.closePopUpSuccess}
                        fullWidth
                        variant="outlined"
                        className={classes.alertButton}
                    >Tamam</Button>
                </div>
            </div>
        </Modal>
    )
}
