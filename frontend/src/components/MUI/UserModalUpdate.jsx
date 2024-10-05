
// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import List from '@mui/material/List';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// // import { DialogTitle, DialogContent, DialogActions, TextField, RadioGroup, Grid } from '@mui/material';
// import { DialogTitle, DialogContent, DialogActions, TextField, Grid, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// import { FaTimes } from 'react-icons/fa';
// import Slide from '@mui/material/Slide';
// import { useUpdatePermissionUser, useGetUserById } from '../../services/serviceUser';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function UserUpdateScreenDialog({ open, handleClose, userId }) {
//     const { mutate: updateUser } = useUpdatePermissionUser();
//     const { data: userData, error, isLoading } = useGetUserById(userId);
//     const [imagePreview, setImagePreview] = useState('');
//     const [fields, setFields] = useState({
//         role: '',
//         status: ''
//     });

//     useEffect(() => {
//         if (userData && userData.data) {
//             setFields({
//                 // name: userData.data.name || '',
//                 // email: userData.data.email || '',
//                 // password: userData.data.password || '',
//                 role: userData.data.role || '',
//                 status: userData.data.status || '',
//             });
//             setImagePreview(`${userData.data.image}`);
//             console.log('Données du formulaire:', userData.data.image);
//             console.log('Données du formulaire:', userData.data);
//             console.log('Données du formulaire:', userData);
//             console.log('Données du formulaire:', imagePreview);
//         }
//     }, [userData]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFields(prevFields => ({ ...prevFields, [name]: value }));
//     };

//     const handleSubmit = async () => {

//         const formattedFields = {
//             ...fields,
//             imagePreview
//         };

//         try {
//             console.log(formattedFields);
//             // Appel de la fonction de mise à jour
//             updateUser({ userId, data: formattedFields }, {
//                 onSuccess: () => {
//                     console.log('Utilisateur mis à jour avec succès');
//                     // Réinitialiser le formulaire après l'envoi
//                     setFormData({ role: '', status: '' });
//                     setImagePreview('');
//                 },
//                 onError: (error) => {
//                     console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
//                 }
//             });
//             handleClose();
//         } catch (error) {
//             console.error('Erreur lors de l\'envoi du formulaire:', error);
//             setError('Une erreur est survenue lors de l\'ajout/modification du dossier.');
//         }
//     }


//     // return (
//     //     <React.Fragment>
//     //         <Dialog
//     //             open={open}
//     //             onClose={handleClose}
//     //             TransitionComponent={Transition}
//     //             fullWidth // Assure que le modal occupe toute la largeur disponible
//     //             maxWidth="sm" // Choisissez une taille maximale : 'xs', 'sm', 'md', 'lg', 'xl'
//     //         >
//     //             <AppBar sx={{ position: 'relative' }}>
//     //                 <Toolbar>
//     //                     <IconButton
//     //                         edge="start"
//     //                         color="inherit"
//     //                         onClick={handleClose}
//     //                         aria-label="close"
//     //                     >
//     //                         <FaTimes /> {/* Remplacement de CloseIcon par FaTimes */}
//     //                     </IconButton>
//     //                     <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//     //                         Compte
//     //                     </Typography>
//     //                     <Button autoFocus color="inherit" onClick={handleSubmit}>
//     //                         Modification
//     //                     </Button>
//     //                 </Toolbar>
//     //             </AppBar>
//     //             <List>
//     //                 <DialogTitle> Modification compte utilisateur</DialogTitle>
//     //                 <DialogContent>
//     //                     <form encType="multipart/form-data">
//     //                         <Grid container spacing={2}>
//     //                             <Grid item xs={12} sm={12}>
//     //                                 <TextField
//     //                                     name="role"
//     //                                     label="Role du utilisateur"
//     //                                     variant="standard"
//     //                                     fullWidth
//     //                                     value={fields.role}
//     //                                     onChange={handleChange}
//     //                                 />
//     //                             </Grid>
//     //                             <Grid item xs={12} sm={12}>
//     //                                 <TextField
//     //                                     type="text"
//     //                                     name="status"
//     //                                     label="Status du utilisateur"
//     //                                     variant="standard"
//     //                                     fullWidth
//     //                                     value={fields.status}
//     //                                     onChange={handleChange}
//     //                                 />
//     //                             </Grid>
//     //                         </Grid>
//     //                     </form>
//     //                 </DialogContent>
//     //             </List>
//     //         </Dialog>
//     //     </React.Fragment>
//     // );

//     return (
//         <React.Fragment>
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 TransitionComponent={Transition}
//                 fullWidth
//                 maxWidth="sm"
//             >
//                 <AppBar sx={{ position: 'relative' }}>
//                     <Toolbar>
//                         <IconButton
//                             edge="start"
//                             color="inherit"
//                             onClick={handleClose}
//                             aria-label="close"
//                         >
//                             <FaTimes />
//                         </IconButton>
//                         <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//                             Compte
//                         </Typography>
//                         <Button autoFocus color="inherit" onClick={handleSubmit}>
//                             Modification
//                         </Button>
//                     </Toolbar>
//                 </AppBar>
//                 <List>
//                     <DialogTitle>Modification compte utilisateur</DialogTitle>
//                     <DialogContent>
//                         <form encType="multipart/form-data">
//                             <Grid container spacing={2}>
//                                 {/* ... (les champs TextField existants) */}

//                                 <Grid item xs={12} sm={12}>
//                                     <RadioGroup
//                                         row
//                                         aria-label="role"
//                                         name="role"
//                                         value={fields.role}
//                                         onChange={(e) => setFields({ ...fields, role: e.target.value })}
//                                     >
//                                         <FormControlLabel value="1" control={<Radio />} label="Chef" />
//                                         <FormControlLabel value="0" control={<Radio />} label="Personnel" />
//                                     </RadioGroup>
//                                 </Grid>

//                                 <Grid item xs={12} sm={12}>
//                                     <RadioGroup
//                                         row
//                                         aria-label="status"
//                                         name="status"
//                                         value={fields.status}
//                                         onChange={(e) => setFields({ ...fields, status: e.target.value })}
//                                     >
//                                         <FormControlLabel value="active" control={<Radio />} label="Actif" />
//                                         <FormControlLabel value="desactive" control={<Radio />} label="Désactivé" />
//                                     </RadioGroup>
//                                 </Grid>
//                             </Grid>
//                         </form>
//                     </DialogContent>
//                 </List>
//             </Dialog>
//         </React.Fragment>
//     );

// }




































































// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import List from '@mui/material/List';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { DialogTitle, DialogContent, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// import { FaTimes } from 'react-icons/fa';
// import Slide from '@mui/material/Slide';
// import { useUpdatePermissionUser, useGetUserById } from '../../services/serviceUser';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function UserUpdateScreenDialog({ open, handleClose, userId }) {
//     const { mutate: updateUser } = useUpdatePermissionUser();
//     const { data: userData } = useGetUserById(userId);
//     const [imagePreview, setImagePreview] = useState('');
//     const [fields, setFields] = useState({
//         role: '',
//         status: ''
//     });

//     useEffect(() => {
//         if (userData && userData.data) {
//             setFields({
//                 role: userData.data.role || '',
//                 status: userData.data.status || '',
//             });
//             setImagePreview(`${userData.data.image}`);
//         }
//     }, [userData]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFields(prevFields => ({ ...prevFields, [name]: value }));
//     };

//     const handleSubmit = async () => {
//         const formattedFields = { ...fields, imagePreview };

//         try {
//             updateUser({ userId, data: formattedFields }, {
//                 onSuccess: () => {
//                     console.log('Utilisateur mis à jour avec succès');
//                     setFields({ role: '', status: '' });
//                     setImagePreview('');
//                 },
//                 onError: (error) => {
//                     console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
//                 }
//             });
//             handleClose();
//         } catch (error) {
//             console.error('Erreur lors de l\'envoi du formulaire:', error);
//         }
//     }

//     return (
//         <React.Fragment>
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 TransitionComponent={Transition}
//                 fullWidth
//                 maxWidth="sm"
//             >
//                 <AppBar sx={{ position: 'relative' }}>
//                     <Toolbar>
//                         <IconButton
//                             edge="start"
//                             color="inherit"
//                             onClick={handleClose}
//                             aria-label="close"
//                         >
//                             <FaTimes />
//                         </IconButton>
//                         <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//                             Compte
//                         </Typography>
//                         <Button autoFocus color="inherit" onClick={handleSubmit}>
//                             Modification
//                         </Button>
//                     </Toolbar>
//                 </AppBar>
//                 <List>
//                     <DialogTitle> Modification compte utilisateur</DialogTitle>
//                     <DialogContent>
//                         <Grid container spacing={2}>
//                             {/* Première ligne: Radio pour rôle */}
//                             <Grid item xs={12} sm={12}>
//                                 <FormControl component="fieldset">
//                                     <FormLabel component="legend">Rôle de l'utilisateur</FormLabel>
//                                     <RadioGroup
//                                         name="role"
//                                         value={fields.role}
//                                         onChange={handleChange}
//                                     >
//                                         <FormControlLabel
//                                             value="1"
//                                             control={<Radio />}
//                                             label="Chef"
//                                         />
//                                         <FormControlLabel
//                                             value="0"
//                                             control={<Radio />}
//                                             label="Personnel"
//                                         />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </Grid>

//                             {/* Deuxième ligne: Radio pour statut */}
//                             <Grid item xs={12} sm={12}>
//                                 <FormControl component="fieldset">
//                                     <FormLabel component="legend">Statut de l'utilisateur</FormLabel>
//                                     <RadioGroup
//                                         name="status"
//                                         value={fields.status}
//                                         onChange={handleChange}
//                                     >
//                                         <FormControlLabel
//                                             value="active"
//                                             control={<Radio />}
//                                             label="Actif"
//                                         />
//                                         <FormControlLabel
//                                             value="desactive"
//                                             control={<Radio />}
//                                             label="Désactivé"
//                                         />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </Grid>
//                         </Grid>
//                     </DialogContent>
//                 </List>
//             </Dialog>
//         </React.Fragment>
//     );
// }
































// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import List from '@mui/material/List';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { DialogTitle, DialogContent, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// import { FaTimes } from 'react-icons/fa';
// import Slide from '@mui/material/Slide';
// import { useUpdatePermissionUser, useGetUserById } from '../../services/serviceUser';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function UserUpdateScreenDialog({ open, handleClose, userId }) {
//     const { mutate: updateUser } = useUpdatePermissionUser();
//     const { data: userData } = useGetUserById(userId);
//     const [imagePreview, setImagePreview] = useState('');
//     const [fields, setFields] = useState({
//         role: '',
//         status: ''
//     });

//     useEffect(() => {
//         if (userData && userData.data) {
//             setFields({
//                 role: userData.data.role === '1' ? 'chef' : 'personnel', // Mapping des valeurs
//                 status: userData.data.status === 'active' ? 'active' : 'desactive',
//             });
//             setImagePreview(`${userData.data.image}`);
//         }
//     }, [userData]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFields(prevFields => ({ ...prevFields, [name]: value }));
//     };

//     const handleSubmit = async () => {
//         const formattedFields = { ...fields, imagePreview };

//         try {
//             // updateUser({ userId, data: formattedFields }, {
//             //     onSuccess: () => {
//             //         console.log('Utilisateur mis à jour avec succès');
//             //         setFields({ role: '', status: '' });
//             //         setImagePreview('');
//             //     },
//             //     onError: (error) => {
//             //         console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
//             //     }
//             // });
//             handleClose();
//         } catch (error) {
//             console.error('Erreur lors de l\'envoi du formulaire:', error);
//         }
//     }

//     return (
//         <React.Fragment>
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 TransitionComponent={Transition}
//                 fullWidth
//                 maxWidth="sm"
//             >
//                 <AppBar sx={{ position: 'relative' }}>
//                     <Toolbar>
//                         <IconButton
//                             edge="start"
//                             color="inherit"
//                             onClick={handleClose}
//                             aria-label="close"
//                         >
//                             <FaTimes />
//                         </IconButton>
//                         <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//                             Compte
//                         </Typography>
//                         <Button autoFocus color="inherit" onClick={handleSubmit}>
//                             Modification
//                         </Button>
//                     </Toolbar>
//                 </AppBar>
//                 <List>
//                     <DialogTitle>Modification compte utilisateur</DialogTitle>
//                     <DialogContent>
//                         <Grid container spacing={2}>
//                             {/* Première ligne: Radio pour rôle */}
//                             <Grid item xs={12} sm={12}>
//                                 <FormControl component="fieldset">
//                                     <FormLabel component="legend">Rôle de l'utilisateur</FormLabel>
//                                     <RadioGroup
//                                         name="role"
//                                         value={fields.role}
//                                         onChange={handleChange}
//                                     >
//                                         <FormControlLabel
//                                             value="chef" // Changer la valeur de 1 à chef
//                                             control={<Radio />}
//                                             label="Chef"
//                                         />
//                                         <FormControlLabel
//                                             value="personnel" // Changer la valeur de 0 à personnel
//                                             control={<Radio />}
//                                             label="Personnel"
//                                         />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </Grid>

//                             {/* Deuxième ligne: Radio pour statut */}
//                             <Grid item xs={12} sm={12}>
//                                 <FormControl component="fieldset">
//                                     <FormLabel component="legend">Statut de l'utilisateur</FormLabel>
//                                     <RadioGroup
//                                         name="status"
//                                         value={fields.status}
//                                         onChange={handleChange}
//                                     >
//                                         <FormControlLabel
//                                             value="active"
//                                             control={<Radio />}
//                                             label="Actif"
//                                         />
//                                         <FormControlLabel
//                                             value="desactive"
//                                             control={<Radio />}
//                                             label="Désactivé"
//                                         />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </Grid>
//                         </Grid>
//                     </DialogContent>
//                 </List>
//             </Dialog>
//         </React.Fragment>
//     );
// }



















// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import List from '@mui/material/List';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { DialogTitle, DialogContent, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// import { FaTimes } from 'react-icons/fa';
// import Slide from '@mui/material/Slide';
// import { useUpdatePermissionUser, useGetUserById } from '../../services/serviceUser';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function UserUpdateScreenDialog({ open, handleClose, userId }) {
//     const { mutate: updateUser } = useUpdatePermissionUser();
//     const { data: userData } = useGetUserById(userId);
//     const [imagePreview, setImagePreview] = useState('');
//     const [fields, setFields] = useState({
//         role: '',
//         status: ''
//     });

//     useEffect(() => {
//         if (userData && userData.data) {
//             setFields({
//                 role: userData.data.role === '1' ? 'chef' : 'personnel', // Mapping des valeurs
//                 status: userData.data.status === 'active' ? 'active' : 'desactive',
//             });
//             // setImagePreview(`${userData.data.image}`);
//         }
//     }, [userData]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFields(prevFields => ({ ...prevFields, [name]: value }));
//     };

//     const handleSubmit = async () => {
//         // const formattedFields = { ...fields, imagePreview };
//         const formattedFields = { ...fields };

//         // Affichez les valeurs des champs dans la console
//         console.log('Valeurs récupérées:', formattedFields);

//         try {
//             // updateUser({ userId, data: formattedFields }, {
//             //     onSuccess: () => {
//             //         console.log('Utilisateur mis à jour avec succès');
//             //         setFields({ role: '', status: '' });
//             //         setImagePreview('');
//             //     },
//             //     onError: (error) => {
//             //         console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
//             //     }
//             // });
//             handleClose();
//         } catch (error) {
//             console.error('Erreur lors de l\'envoi du formulaire:', error);
//         }
//     }

//     return (
//         <React.Fragment>
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 TransitionComponent={Transition}
//                 fullWidth
//                 maxWidth="sm"
//             >
//                 <AppBar sx={{ position: 'relative' }}>
//                     <Toolbar>
//                         <IconButton
//                             edge="start"
//                             color="inherit"
//                             onClick={handleClose}
//                             aria-label="close"
//                         >
//                             <FaTimes />
//                         </IconButton>
//                         <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//                             Compte
//                         </Typography>
//                         <Button autoFocus color="inherit" onClick={handleSubmit}>
//                             Modification
//                         </Button>
//                     </Toolbar>
//                 </AppBar>
//                 <List>
//                     <DialogTitle>Modification compte utilisateur</DialogTitle>
//                     <DialogContent>
//                         <Grid container spacing={2}>
//                             {/* Première ligne: Radio pour rôle */}
//                             <Grid item xs={12} sm={12}>
//                                 <FormControl component="fieldset">
//                                     <FormLabel component="legend">Rôle de l'utilisateur</FormLabel>
//                                     <RadioGroup
//                                         name="role"
//                                         value={fields.role}
//                                         onChange={handleChange}
//                                     >
//                                         <FormControlLabel
//                                             value="chef" // Changer la valeur de 1 à chef
//                                             control={<Radio />}
//                                             label="Chef"
//                                         />
//                                         <FormControlLabel
//                                             value="personnel" // Changer la valeur de 0 à personnel
//                                             control={<Radio />}
//                                             label="Personnel"
//                                         />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </Grid>

//                             {/* Deuxième ligne: Radio pour statut */}
//                             <Grid item xs={12} sm={12}>
//                                 <FormControl component="fieldset">
//                                     <FormLabel component="legend">Statut de l'utilisateur</FormLabel>
//                                     <RadioGroup
//                                         name="status"
//                                         value={fields.status}
//                                         onChange={handleChange}
//                                     >
//                                         <FormControlLabel
//                                             value="active"
//                                             control={<Radio />}
//                                             label="Actif"
//                                         />
//                                         <FormControlLabel
//                                             value="desactive"
//                                             control={<Radio />}
//                                             label="Désactivé"
//                                         />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </Grid>
//                         </Grid>
//                     </DialogContent>
//                 </List>
//             </Dialog>
//         </React.Fragment>
//     );
// }


















































// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import List from '@mui/material/List';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { DialogTitle, DialogContent, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// import { FaTimes } from 'react-icons/fa';
// import Slide from '@mui/material/Slide';
// import { useUpdatePermissionUser, useGetUserById } from '../../services/serviceUser';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function UserUpdateScreenDialog({ open, handleClose, userId }) {
//     const { mutate: updateUser } = useUpdatePermissionUser();
//     const { data: userData } = useGetUserById(userId);
//     const [imagePreview, setImagePreview] = useState('');
//     const [fields, setFields] = useState({
//         role: '',
//         status: ''
//     });

//     useEffect(() => {
//         if (userData && userData.data) {
//             setFields({
//                 role: userData.data.role === '1' ? 'chef' : 'personnel', // Mapping des valeurs
//                 status: userData.data.status === 'active' ? 'active' : 'desactive',
//             });
//             // setImagePreview(`${userData.data.image}`);
//         }
//     }, [userData]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFields(prevFields => ({ ...prevFields, [name]: value }));
//     };

//     const handleSubmit = async () => {
//         // Mapping des valeurs pour l'envoi vers le backend
//         const roleMapping = {
//             chef: '1',        // 1 pour Chef
//             personnel: '0'    // 0 pour Personnel
//         };

//         const statusMapping = {
//             active: 'active',         // 'active' pour actif
//             desactive: 'desactive'    // 'desactive' pour désactivé
//         };

//         // Formater les champs pour l'envoi
//         const formattedFields = {
//             role: roleMapping[fields.role],          // Utiliser le mapping
//             status: statusMapping[fields.status]     // Utiliser le mapping
//         };

//         // Affichez les valeurs formatées dans la console
//         console.log('Valeurs récupérées:', formattedFields);

//         try {
//             // Appelez la fonction updateUser ici, si nécessaire
//             // updateUser({ userId, data: formattedFields }, {
//             //     onSuccess: () => {
//             //         console.log('Utilisateur mis à jour avec succès');
//             //         setFields({ role: '', status: '' });
//             //         setImagePreview('');
//             //     },
//             //     onError: (error) => {
//             //         console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
//             //     }
//             // });

//             handleClose();
//         } catch (error) {
//             console.error('Erreur lors de l\'envoi du formulaire:', error);
//         }
//     }

//     return (
//         <React.Fragment>
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 TransitionComponent={Transition}
//                 fullWidth
//                 maxWidth="sm"
//             >
//                 <AppBar sx={{ position: 'relative' }}>
//                     <Toolbar>
//                         <IconButton
//                             edge="start"
//                             color="inherit"
//                             onClick={handleClose}
//                             aria-label="close"
//                         >
//                             <FaTimes />
//                         </IconButton>
//                         <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//                             Compte
//                         </Typography>
//                         <Button autoFocus color="inherit" onClick={handleSubmit}>
//                             Modification
//                         </Button>
//                     </Toolbar>
//                 </AppBar>
//                 <List>
//                     <DialogTitle>Modification compte utilisateur</DialogTitle>
//                     <DialogContent>
//                         <Grid container spacing={2}>
//                             {/* Première ligne: Radio pour rôle */}
//                             <Grid item xs={12} sm={12}>
//                                 <FormControl component="fieldset">
//                                     <FormLabel component="legend">Rôle de l'utilisateur</FormLabel>
//                                     <RadioGroup
//                                         name="role"
//                                         value={fields.role}
//                                         onChange={handleChange}
//                                     >
//                                         <FormControlLabel
//                                             value="chef" // Changer la valeur de 1 à chef
//                                             control={<Radio />}
//                                             label="Chef"
//                                         />
//                                         <FormControlLabel
//                                             value="personnel" // Changer la valeur de 0 à personnel
//                                             control={<Radio />}
//                                             label="Personnel"
//                                         />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </Grid>

//                             {/* Deuxième ligne: Radio pour statut */}
//                             <Grid item xs={12} sm={12}>
//                                 <FormControl component="fieldset">
//                                     <FormLabel component="legend">Statut de l'utilisateur</FormLabel>
//                                     <RadioGroup
//                                         name="status"
//                                         value={fields.status}
//                                         onChange={handleChange}
//                                     >
//                                         <FormControlLabel
//                                             value="active"
//                                             control={<Radio />}
//                                             label="Actif"
//                                         />
//                                         <FormControlLabel
//                                             value="desactive"
//                                             control={<Radio />}
//                                             label="Désactivé"
//                                         />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </Grid>
//                         </Grid>
//                     </DialogContent>
//                 </List>
//             </Dialog>
//         </React.Fragment>
//     );
// }










































// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import List from '@mui/material/List';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { DialogTitle, DialogContent, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// import { FaTimes } from 'react-icons/fa';
// import Slide from '@mui/material/Slide';
// import { useUpdatePermissionUser, useGetUserById } from '../../services/serviceUser';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function UserUpdateScreenDialog({ open, handleClose, userId }) {
//     const { mutate: updateUser } = useUpdatePermissionUser();
//     const { data: userData } = useGetUserById(userId);
//     const [fields, setFields] = useState({
//         role: '',
//         status: ''
//     });

//     useEffect(() => {
//         if (userData && userData.data) {
//             // Assurez-vous que les valeurs récupérées sont correctes
//             console.log('Données utilisateur récupérées:', userData.data);
            
//             setFields({
//                 role: userData.data.role === '1' ? 'chef' : 'personnel', // Mapping des valeurs
//                 status: userData.data.status === 'active' ? 'active' : 'desactive',
//             });
//         }
//     }, [userData]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFields(prevFields => ({ ...prevFields, [name]: value }));
//     };

//     const handleSubmit = async () => {
//         const roleMapping = {
//             chef: '1',        // 1 pour Chef
//             personnel: '0'    // 0 pour Personnel
//         };

//         const statusMapping = {
//             active: 'active',         // 'active' pour actif
//             desactive: 'desactive'    // 'desactive' pour désactivé
//         };

//         const formattedFields = {
//             role: roleMapping[fields.role],          // Utiliser le mapping
//             status: statusMapping[fields.status]     // Utiliser le mapping
//         };

//         console.log('Valeurs récupérées:', formattedFields);

//         try {
//             // Uncomment and implement the updateUser call
//             // await updateUser({ userId, data: formattedFields });
//             handleClose();
//         } catch (error) {
//             console.error('Erreur lors de l\'envoi du formulaire:', error);
//         }
//     };

//     return (
//         <React.Fragment>
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 TransitionComponent={Transition}
//                 fullWidth
//                 maxWidth="sm"
//             >
//                 <AppBar sx={{ position: 'relative' }}>
//                     <Toolbar>
//                         <IconButton
//                             edge="start"
//                             color="inherit"
//                             onClick={handleClose}
//                             aria-label="close"
//                         >
//                             <FaTimes />
//                         </IconButton>
//                         <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//                             Compte
//                         </Typography>
//                         <Button autoFocus color="inherit" onClick={handleSubmit}>
//                             Modification
//                         </Button>
//                     </Toolbar>
//                 </AppBar>
//                 <List>
//                     <DialogTitle>Modification compte utilisateur</DialogTitle>
//                     <DialogContent>
//                         <Grid container spacing={2}>
//                             {/* Première ligne: Radio pour rôle */}
//                             <Grid item xs={12} sm={12}>
//                                 <FormControl component="fieldset">
//                                     <FormLabel component="legend">Rôle de l'utilisateur</FormLabel>
//                                     <RadioGroup
//                                         name="role"
//                                         value={fields.role}
//                                         onChange={handleChange}
//                                     >
//                                         <FormControlLabel
//                                             value="chef" // Changer la valeur de 1 à chef
//                                             control={<Radio />}
//                                             label="Chef"
//                                         />
//                                         <FormControlLabel
//                                             value="personnel" // Changer la valeur de 0 à personnel
//                                             control={<Radio />}
//                                             label="Personnel"
//                                         />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </Grid>

//                             {/* Deuxième ligne: Radio pour statut */}
//                             <Grid item xs={12} sm={12}>
//                                 <FormControl component="fieldset">
//                                     <FormLabel component="legend">Statut de l'utilisateur</FormLabel>
//                                     <RadioGroup
//                                         name="status"
//                                         value={fields.status}
//                                         onChange={handleChange}
//                                     >
//                                         <FormControlLabel
//                                             value="active"
//                                             control={<Radio />}
//                                             label="Actif"
//                                         />
//                                         <FormControlLabel
//                                             value="desactive"
//                                             control={<Radio />}
//                                             label="Désactivé"
//                                         />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </Grid>
//                         </Grid>
//                     </DialogContent>
//                 </List>
//             </Dialog>
//         </React.Fragment>
//     );
// }

























// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import List from '@mui/material/List';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { DialogTitle, DialogContent, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// import { FaTimes } from 'react-icons/fa';
// import Slide from '@mui/material/Slide';
// import { useUpdatePermissionUser, useGetUserById } from '../../services/serviceUser';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function UserUpdateScreenDialog({ open, handleClose, userId }) {
//     const { mutate: updateUser } = useUpdatePermissionUser();
//     const { data: userData } = useGetUserById(userId);
//     const [imagePreview, setImagePreview] = useState('');
//     const [fields, setFields] = useState({
//         role: '',
//         status: ''
//     });

//     useEffect(() => {
//         if (userData && userData.data) {
//             setFields({
//                 role: userData.data.role === '0' ? 'chef' : 'personnel',
//                 status: userData.data.status === 'active' ? 'active' : 'desactive',
//             });
//             setImagePreview(`${userData.data.image}`);
//         }
//     }, [userData]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFields(prevFields => ({ ...prevFields, [name]: value }));
//     };

//     const handleSubmit = async () => {
//         const roleMapping = {
//             chef: '1',
//             personnel: '0'
//         };

//         const statusMapping = {
//             active: 'active',
//             desactive: 'desactive'
//         };

//         const formattedFields = {
//             role: roleMapping[fields.role],
//             status: statusMapping[fields.status]
//         };

//         console.log('Valeurs récupérées:', formattedFields);

//         try {
//             // updateUser({ userId, data: formattedFields }, {
//             //     onSuccess: () => {
//             //         console.log('Utilisateur mis à jour avec succès');
//             //         setFields({ role: '', status: '' });
//             //         setImagePreview('');
//             //     },
//             //     onError: (error) => {
//             //         console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
//             //     }
//             // });
//             handleClose();
//         } catch (error) {
//             console.error('Erreur lors de l\'envoi du formulaire:', error);
//         }
//     };

//     return (
//         <React.Fragment>
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 TransitionComponent={Transition}
//                 fullWidth
//                 maxWidth="sm"
//             >
//                 <AppBar sx={{ position: 'relative' }}>
//                     <Toolbar>
//                         <IconButton
//                             edge="start"
//                             color="inherit"
//                             onClick={handleClose}
//                             aria-label="close"
//                         >
//                             <FaTimes />
//                         </IconButton>
//                         <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//                             Compte
//                         </Typography>
//                         <Button autoFocus color="inherit" onClick={handleSubmit}>
//                             Modification
//                         </Button>
//                     </Toolbar>
//                 </AppBar>
//                 <List>
//                     <DialogTitle>Modification compte utilisateur</DialogTitle>
//                     <DialogContent>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} sm={12}>
//                                 <FormControl component="fieldset">
//                                     <FormLabel component="legend">Rôle de l'utilisateur</FormLabel>
//                                     <RadioGroup
//                                         name="role"
//                                         value={fields.role}
//                                         onChange={handleChange}
//                                     >
//                                         <FormControlLabel
//                                             value="chef"
//                                             control={<Radio />}
//                                             label="Chef"
//                                         />
//                                         <FormControlLabel
//                                             value="personnel"
//                                             control={<Radio />}
//                                             label="Personnel"
//                                         />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </Grid>

//                             <Grid item xs={12} sm={12}>
//                                 <FormControl component="fieldset">
//                                     <FormLabel component="legend">Statut de l'utilisateur</FormLabel>
//                                     <RadioGroup
//                                         name="status"
//                                         value={fields.status}
//                                         onChange={handleChange}
//                                     >
//                                         <FormControlLabel
//                                             value="active"
//                                             control={<Radio />}
//                                             label="Actif"
//                                         />
//                                         <FormControlLabel
//                                             value="desactive"
//                                             control={<Radio />}
//                                             label="Désactivé"
//                                         />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </Grid>
//                         </Grid>
//                     </DialogContent>
//                 </List>
//             </Dialog>
//         </React.Fragment>
//     );
// }









































// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import List from '@mui/material/List';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { DialogTitle, DialogContent, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// import { FaTimes } from 'react-icons/fa';
// import Slide from '@mui/material/Slide';
// import { useUpdatePermissionUser, useGetUserById } from '../../services/serviceUser';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function UserUpdateScreenDialog({ open, handleClose, userId }) {
//     const { mutate: updateUser } = useUpdatePermissionUser();
//     const { data: userData } = useGetUserById(userId);
//     const [imagePreview, setImagePreview] = useState('');
//     const [fields, setFields] = useState({
//         role: '',
//         status: ''
//     });

//     useEffect(() => {
//         if (userData && userData.data) {
//             // Inverser la logique ici
//             setFields({
//                 role: userData.data.role === '1' ? 'chef' : 'personnel', // 1 -> chef, 0 -> personnel
//                 status: userData.data.status === 'active' ? 'active' : 'desactive',
//             });
//             setImagePreview(`${userData.data.image}`);
//             console.log(userData.data.role);
//         }
//     }, [userData]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFields(prevFields => ({ ...prevFields, [name]: value }));
//     };

//     const handleSubmit = async () => {
//         const roleMapping = {
//             chef: '1',         // 1 pour Chef
//             personnel: '0'     // 0 pour Personnel
//         };

//         const statusMapping = {
//             active: 'active',      // 'active' pour actif
//             desactive: 'desactive' // 'desactive' pour désactivé
//         };

//         const formattedFields = {
//             role: roleMapping[fields.role],          // Utiliser le mapping
//             status: statusMapping[fields.status]     // Utiliser le mapping
//         };

//         console.log('Valeurs récupérées:', formattedFields);

//         try {
//             // Appelez la fonction updateUser ici, si nécessaire
//             // updateUser({ userId, data: formattedFields }, {
//             //     onSuccess: () => {
//             //         console.log('Utilisateur mis à jour avec succès');
//             //         setFields({ role: '', status: '' });
//             //         setImagePreview('');
//             //     },
//             //     onError: (error) => {
//             //         console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
//             //     }
//             // });
//             handleClose();
//         } catch (error) {
//             console.error('Erreur lors de l\'envoi du formulaire:', error);
//         }
//     };

//     return (
//         <React.Fragment>
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 TransitionComponent={Transition}
//                 fullWidth
//                 maxWidth="sm"
//             >
//                 <AppBar sx={{ position: 'relative' }}>
//                     <Toolbar>
//                         <IconButton
//                             edge="start"
//                             color="inherit"
//                             onClick={handleClose}
//                             aria-label="close"
//                         >
//                             <FaTimes />
//                         </IconButton>
//                         <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//                             Compte
//                         </Typography>
//                         <Button autoFocus color="inherit" onClick={handleSubmit}>
//                             Modification
//                         </Button>
//                     </Toolbar>
//                 </AppBar>
//                 <List>
//                     <DialogTitle>Modification compte utilisateur</DialogTitle>
//                     <DialogContent>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} sm={12}>
//                                 <FormControl component="fieldset">
//                                     <FormLabel component="legend">Rôle de l'utilisateur</FormLabel>
//                                     <RadioGroup
//                                         name="role"
//                                         value={fields.role}
//                                         onChange={handleChange}
//                                     >
//                                         <FormControlLabel
//                                             value="chef"
//                                             control={<Radio />}
//                                             label="Chef"
//                                         />
//                                         <FormControlLabel
//                                             value="personnel"
//                                             control={<Radio />}
//                                             label="Personnel"
//                                         />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </Grid>

//                             <Grid item xs={12} sm={12}>
//                                 <FormControl component="fieldset">
//                                     <FormLabel component="legend">Statut de l'utilisateur</FormLabel>
//                                     <RadioGroup
//                                         name="status"
//                                         value={fields.status}
//                                         onChange={handleChange}
//                                     >
//                                         <FormControlLabel
//                                             value="active"
//                                             control={<Radio />}
//                                             label="Actif"
//                                         />
//                                         <FormControlLabel
//                                             value="desactive"
//                                             control={<Radio />}
//                                             label="Désactivé"
//                                         />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </Grid>
//                         </Grid>
//                     </DialogContent>
//                 </List>
//             </Dialog>
//         </React.Fragment>
//     );
// }



































import React, { useState, useEffect,  useRef } from 'react';
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function UserUpdateScreenDialog({ open, handleClose, userId, onSuccessUpdate }) {
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
                },
                onError: (error) => {
                    console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
                }
            });
            onSuccessUpdate();
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
