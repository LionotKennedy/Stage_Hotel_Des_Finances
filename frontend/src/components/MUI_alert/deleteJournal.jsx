
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useDeleteJournal } from '../../services/serviceJournal';
import { useGetJournals } from '../../services/serviceJournal';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertJournalDialogSlide({ open, setOpen, id, onSuccess }) {

    const deleteJournalMutation = useDeleteJournal();
    const { data: journals, refetch, isLoading } = useGetJournals();

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirmDelete = async () => {
        // Ajoutez votre logique de suppression ici avec folderId
        console.log(id);

        try {
            await deleteJournalMutation.mutateAsync({id});
            console.log("Supprimer le dossier avec ID:", id);
            refetch();
            setOpen(false);
            onSuccess();
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
            <DialogTitle>{"Confirmation de suppression"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Êtes-vous sûr de vouloir supprimer le journal avec l'ID: {id} ?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Annuler</Button>
                <Button onClick={handleConfirmDelete}>Confirmer</Button>
            </DialogActions>
        </Dialog>
    );
}


