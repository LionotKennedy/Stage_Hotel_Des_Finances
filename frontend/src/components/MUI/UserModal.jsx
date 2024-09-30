
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { DialogTitle, DialogContent, DialogActions, TextField, Grid } from '@mui/material';
import { FaTimes } from 'react-icons/fa';
import Slide from '@mui/material/Slide';
import { useAddUser } from '../../services/serviceUser';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function UserScreenDialog({ open, handleClose }) {

    const [fields, setFields] = useState({
        name: '',
        email: ''
    });

    const addUserMutation = useAddUser();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFields(prevFields => ({ ...prevFields, [name]: value }));
    };

    const handleSubmit = async () => {
        if (!fields.name || !fields.email) {
            setError('Veuillez remplir tous les champs requis.');
            return;
        }

        const formattedFields = {
            ...fields,
        };

        try {
            // await addUserMutation.mutateAsync(formattedFields);
            console.log(formattedFields);
            handleClose();
        } catch (error) {
            console.error('Erreur lors de l\'envoi du formulaire:', error);
            setError('Une erreur est survenue lors de l\'ajout/modification du dossier.');      
        }
    }


    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                fullWidth // Assure que le modal occupe toute la largeur disponible
                maxWidth="sm" // Choisissez une taille maximale : 'xs', 'sm', 'md', 'lg', 'xl'
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <FaTimes /> {/* Remplacement de CloseIcon par FaTimes */}
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Compte
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleSubmit}>
                            Creer
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <DialogTitle> Creation compte utilisateur</DialogTitle>
                    <DialogContent>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="name"
                                        label="Nom du utilisateur"
                                        variant="standard"
                                        fullWidth
                                        //   value={fields.numero_bordereaux}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        type="email"
                                        name="email"
                                        label="Adresse email"
                                        variant="standard"
                                        fullWidth
                                        //   value={fields.date_depart}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </DialogContent>
                </List>
            </Dialog>
        </React.Fragment>
    );
}
