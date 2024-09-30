
import React, { useState, useEffect } from 'react';
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
import { useUpdatePermissionUser, useGetUserById } from '../../services/serviceUser';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function UserUpdateScreenDialog({ open, handleClose, userId }) {
    const { mutate: updateUser } = useUpdatePermissionUser();
    const { data: userData, error, isLoading } = useGetUserById(userId);
    const [imagePreview, setImagePreview] = useState('');
    const [fields, setFields] = useState({
        role: '',
        status: ''
    });

    useEffect(() => {
        if (userData && userData.data) {
            setFields({
                // name: userData.data.name || '',
                // email: userData.data.email || '',
                // password: userData.data.password || '',
                role: userData.data.role || '',
                status: userData.data.status || '',
            });
            setImagePreview(`${userData.data.image}`);
            console.log('Données du formulaire:', userData.data.image);
            console.log('Données du formulaire:', userData.data);
            console.log('Données du formulaire:', userData);
            console.log('Données du formulaire:', imagePreview);
        }
    }, [userData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFields(prevFields => ({ ...prevFields, [name]: value }));
    };

    const handleSubmit = async () => {

        const formattedFields = {
            ...fields,
            imagePreview
        };

        try {
            console.log(formattedFields);
            // Appel de la fonction de mise à jour
            updateUser({ userId, data: formattedFields }, {
                onSuccess: () => {
                    console.log('Utilisateur mis à jour avec succès');
                    // Réinitialiser le formulaire après l'envoi
                    setFormData({ role: '', status: ''});
                    setImagePreview('');
                },
                onError: (error) => {
                    console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
                }
            });
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
                            Modification
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <DialogTitle> Modification compte utilisateur</DialogTitle>
                    <DialogContent>
                        <form  encType="multipart/form-data">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="role"
                                        label="Role du utilisateur"
                                        variant="standard"
                                        fullWidth
                                        value={fields.role}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        type="text"
                                        name="status"
                                        label="Status du utilisateur"
                                        variant="standard"
                                        fullWidth
                                        value={fields.status}
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
