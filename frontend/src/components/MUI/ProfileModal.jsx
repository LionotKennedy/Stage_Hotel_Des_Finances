

// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemButton from '@mui/material/ListItemButton';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { DialogTitle, DialogContent, DialogActions, TextField, Grid } from '@mui/material';
// import { useUpdatePermissionUser, useGetUserById } from '../../services/serviceUser';
// import { FaTimes } from 'react-icons/fa';
// import Slide from '@mui/material/Slide';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function FullScreenDialog({ open, handleClose, userId }) {
//   const { data: userData, error, isLoading } = useGetUserById(userId);
//   const [imagePreview, setImagePreview] = useState('');
//   console.log("*C" + userId);

//   const [fields, setFields] = useState({
//     passwordOld: '',
//     password: ''
//   });

//   useEffect(() => {
//     if (userData && userData.data) {
//       setFields({
//         // name: userData.data.name || '',
//         // email: userData.data.email || '',
//         // password: userData.data.password || '',
//         role: userData.data.role || '',
//         status: userData.data.status || '',
//       });
//       setImagePreview(`${userData.data.image}`);
//       console.log('Données du formulaire Modification mot de passe:', userData.data.image);
//       console.log('Données du formulaire Modification mot de passe:', userData.data);
//       console.log('Données du formulaire Modification mot de passe:', userData);
//       console.log('Données du formulaire Modification mot de passe:', imagePreview);
//     }
//   }, [userData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFields(prevFields => ({ ...prevFields, [name]: value }));
//   };

//   return (
//     <React.Fragment>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Transition}
//         fullWidth
//         maxWidth="sm"
//       >
//         <AppBar sx={{ position: 'relative' }}>
//           <Toolbar>
//             <IconButton
//               edge="start"
//               color="inherit"
//               onClick={handleClose}
//               aria-label="close"
//             >
//               <FaTimes />
//             </IconButton>
//             <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//               Sound
//             </Typography>
//             <Button autoFocus color="inherit" onClick={handleClose}>
//               Save
//             </Button>
//           </Toolbar>
//         </AppBar>
//         <List>
//           {/* <ListItemButton>
//             <ListItemText primary="Phone ringtone" secondary="Titania" />
//           </ListItemButton>
//           <Divider />
//           <ListItemButton>
//             <ListItemText
//               primary="Default notification ringtone"
//               secondary="Tethys"
//             />
//           </ListItemButton> */}
//           <DialogTitle> Modification mot de passe utilisateur</DialogTitle>
//           <DialogContent>
//             <form encType="multipart/form-data">
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={12}>
//                   <TextField
//                     type="password"
//                     name="passwordOld"
//                     label="Votre mot de passe"
//                     variant="standard"
//                     fullWidth
//                     // value={fields.role}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={12}>
//                   <TextField
//                     type="password"
//                     name="password"
//                     label="Nouvelle mot de passe"
//                     variant="standard"
//                     fullWidth
//                     // value={fields.status}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//               </Grid>
//             </form>
//           </DialogContent>
//         </List>
//       </Dialog>
//     </React.Fragment>
//   );
// }





































import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { DialogTitle, DialogContent, DialogActions, TextField, Grid } from '@mui/material';
import { useUpdateUserPassword, useGetUserById } from '../../services/serviceUser'; // Ajouter ce service
import { FaTimes } from 'react-icons/fa';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, handleClose, userId }) {
  const { data: userData, error, isLoading } = useGetUserById(userId);
  const [imagePreview, setImagePreview] = useState('');
  const [fields, setFields] = useState({
    passwordOld: '',
    password: ''
  });

  const updatePasswordMutation = useUpdateUserPassword(); // Utilisez le hook de mise à jour du mot de passe

  useEffect(() => {
    if (userData && userData.data) {
      setImagePreview(`${userData.data.image}`);
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields(prevFields => ({ ...prevFields, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Appel de la mutation pour mettre à jour le mot de passe
    try {
      await updatePasswordMutation.mutateAsync({ userId, oldPassword: fields.passwordOld, newPassword: fields.password });
      alert("Mot de passe mis à jour avec succès."); // Affiche un message de succès
      handleClose(); // Ferme le dialogue après la mise à jour
    } catch (error) {
      alert(`Erreur: ${error.message}`); // Affiche un message d'erreur
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
              Changer de mot de passe
            </Typography>
            <Button color="inherit" onClick={handleSubmit}>
              Enregistrer
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <DialogTitle>Modification mot de passe utilisateur</DialogTitle>
          <DialogContent>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    type="password"
                    name="passwordOld"
                    label="Votre ancien mot de passe"
                    variant="standard"
                    fullWidth
                    onChange={handleChange}
                    required // Champ requis
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    type="password"
                    name="password"
                    label="Nouvelle mot de passe"
                    variant="standard"
                    fullWidth
                    onChange={handleChange}
                    required // Champ requis
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
