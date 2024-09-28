
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useDeleteVisa } from '../../services/serviceVisa';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlideVisa({ open, setOpen, folderId }) {

    const deleteVisaMutation = useDeleteVisa();

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirmDelete = async () => {
        // Ajoutez votre logique de suppression ici avec folderId
        console.log(folderId);

        try {
            await deleteVisaMutation.mutateAsync({folderId});
            console.log("Supprimer le dossier avec ID:", folderId);
            setOpen(false);
        } catch (error) {
            console.error('Erreur lors de l\'envoi du formulaire:', error);
            setError('Une erreur est survenue lors de l\'ajout/modification du dossier.');
        }
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Confirmation de suppression..."}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Êtes-vous sûr de vouloir supprimer le dossier avec l'ID: {folderId} ?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Annuler</Button>
                <Button onClick={handleConfirmDelete}>Confirmer</Button>
            </DialogActions>
        </Dialog>
    );
}


