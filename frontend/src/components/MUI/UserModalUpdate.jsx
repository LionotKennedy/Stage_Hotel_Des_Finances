
import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { DialogTitle, DialogContent, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { FaTimes } from 'react-icons/fa';
import Slide from '@mui/material/Slide';
import { useUpdatePermissionUser, useGetUserById } from '../../services/serviceUser';
import { useGetUser } from '../../services/serviceUser';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function UserUpdateScreenDialog({ open, handleClose, userId, onSuccess }) {
    const { mutate: updateUser } = useUpdatePermissionUser();
    const { data: userData } = useGetUserById(userId);
    const [imagePreview, setImagePreview] = useState('');
    const [fields, setFields] = useState({
        role: '',
        status: ''
    });

    const roleRef = useRef(null);
    const statusRef = useRef(null);

    useEffect(() => {
        if (userData && userData.data) {
            setFields({
                role: userData.data.role === 1 ? 'chef' : 'personnel',
                status: userData.data.status === 'active' ? 'active' : 'desactive',
            });
            setImagePreview(`${userData.data.image}`);
            console.log('Rôle récupéré:', userData.data.role);
            console.log('Statut récupéré:', userData.data.status);
        }
    }, [userData]);

    useEffect(() => {
        if (roleRef.current) {
            roleRef.current.value = fields.role;
        }
        if (statusRef.current) {
            statusRef.current.value = fields.status;
        }
    }, [fields]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFields(prevFields => ({ ...prevFields, [name]: value }));
    };

    const handleSubmit = async () => {
        const roleMapping = {
            chef: '1',         // 1 pour Chef
            personnel: '0'     // 0 pour Personnel
        };

        const statusMapping = {
            active: 'active',      // 'active' pour actif
            desactive: 'desactive' // 'desactive' pour désactivé
        };

        const formattedFields = {
            role: roleMapping[fields.role],          // Utiliser le mapping
            status: statusMapping[fields.status]     // Utiliser le mapping
        };

        console.log('Valeurs récupérées:', formattedFields);

        try {
            updateUser({ userId, data: formattedFields }, {
                onSuccess: () => {
                    console.log('Utilisateur mis à jour avec succès');
                    setFields({ role: '', status: '' });
                    setImagePreview('');
                    onSuccess(); // Appelez refetch ici pour mettre à jour les données

                },
                onError: (error) => {
                    console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
                }
            });
        // if (onSuccess) onSuccess();
        onSuccess();
            handleClose();
        } catch (error) {
            console.error('Erreur lors de l\'envoi du formulaire:', error);
        }
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                fullWidth
                maxWidth="sm"
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <FaTimes />
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
                    <DialogTitle>Modification compte utilisateur</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Rôle de l'utilisateur</FormLabel>
                                    <RadioGroup
                                        name="role"
                                        value={fields.role}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel
                                            value="chef"
                                            control={<Radio />}
                                            label="Chef"
                                        />
                                        <FormControlLabel
                                            value="personnel"
                                            control={<Radio />}
                                            label="Personnel"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Statut de l'utilisateur</FormLabel>
                                    <RadioGroup
                                        name="status"
                                        value={fields.status}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel
                                            value="active"
                                            control={<Radio />}
                                            label="Actif"
                                        />
                                        <FormControlLabel
                                            value="desactive"
                                            control={<Radio />}
                                            label="Désactivé"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </List>
            </Dialog>
        </React.Fragment>
    );
}




























                    // Rafraîchir les données utilisateur
                    // const fetchUser = async () => {
                    //     const { mutate } = useGetUser();
                    //     await mutate();
                    // };

                    // fetchUser().then(() => {
                    //     handleClose();
                    // });













            // onSuccess();
            // Ajoutez ici la logique pour refetch

            // const fetchUser = async () => {
            //     const { mutate } = useGetUser();
            //     await mutate();
            // };

            // fetchUser().then(() => {
            //     handleClose();
            // });


            // if (logUserData && userData) {
            //     logUserData([userData.data]); // Passer les données utilisateur à logUserData
            // }

            // logUserData(userData); // Appellez la fonction ici après la fermeture de la modale