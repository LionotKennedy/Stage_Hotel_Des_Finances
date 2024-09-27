// import React, { useEffect } from 'react';
// // import * as React from 'react';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// // import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
// import { FaTimes } from 'react-icons/fa'; // Importation de l'icône de react-icons
// import { useGetFolderById } from '../../services/serviceFolder';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));

// export default function CustomizedDialogs({ open, setOpen, folderId }) {

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const { data: folderData } = useGetFolderById(folderId);

//   return (
//     <React.Fragment>
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//           Modal title
//         </DialogTitle>
//         <IconButton
//           aria-label="close"
//           onClick={handleClose}
//           sx={(theme) => ({
//             position: 'absolute',
//             right: 8,
//             top: 8,
//             color: theme.palette.grey[500],
//           })}
//         >
//           {/* <CloseIcon /> */}
//           <FaTimes /> {/* Utilisation de l'icône de react-icons */}
//         </IconButton>
//         <DialogContent dividers>
//           <Typography gutterBottom>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//             consectetur ac, vestibulum at eros.
//           </Typography>
//           <Typography gutterBottom>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
//             Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </Typography>
//           <Typography gutterBottom>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
//             magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
//             ullamcorper nulla non metus auctor fringilla.
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={handleClose}>
//             Save changes
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </React.Fragment>
//   );
// }















































// import React, { useEffect } from 'react';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { FaTimes } from 'react-icons/fa'; 
// import { useGetFolderById } from '../../services/serviceFolder';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    //   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
    //     padding: theme.spacing(1),
    //   },
    // }));
    
    // export default function CustomizedDialogs({ open, setOpen, folderId }) {
        //   const handleClose = () => {
            //     setOpen(false);
            //   };
            
            //   // Récupération des données du dossier par ID
            //   const { data: folderData, isLoading, error } = useGetFolderById(folderId);
            
            //   // Gestion des états de chargement et des erreurs
            //   if (isLoading) {
                //     return <div>Chargement...</div>;
                //   }

                //   if (error) {
//     return <div>Erreur lors de la récupération des données.</div>;
//   }

//   // Récupération des données du dossier
//   const folder = folderData?.data;

//   return (
//     <React.Fragment>
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//           Informations du dossier
//         </DialogTitle>
//         <IconButton
//           aria-label="close"
//           onClick={handleClose}
//           sx={(theme) => ({
    //             position: 'absolute',
    //             right: 8,
    //             top: 8,
    //             color: theme.palette.grey[500],
    //           })}
    //         >
    //           <FaTimes />
    //         </IconButton>
    //         <DialogContent dividers>
    //           {/* Affichage des données du dossier */}
    //           <Typography gutterBottom>
    //             <strong>Numéro de bordereau:</strong> {folder?.numero_bordereaux}
    //           </Typography>
    //           <Typography gutterBottom>
    //             <strong>Date de départ:</strong> {new Date(folder?.date_depart).toLocaleDateString()}
    //           </Typography>
    //           <Typography gutterBottom>
    //             <strong>Expéditeur:</strong> {folder?.expiditeur}
    //           </Typography>
    //           <Typography gutterBottom>
//             <strong>Destination:</strong> {folder?.destination}
//           </Typography>
//           {/* Affichage des informations de la nature */}
//           {folder?.id_nature && (
    //             <>
    //               <Typography gutterBottom>
//                 <strong>Description:</strong> {folder?.id_nature.description}
//               </Typography>
//               <Typography gutterBottom>
//                 <strong>Nom déposé:</strong> {folder?.id_nature.nom_depose}
//               </Typography>
//               <Typography gutterBottom>
//                 <strong>Prénom déposé:</strong> {folder?.id_nature.prenom_depose}
//               </Typography>
//               <Typography gutterBottom>
//                 <strong>Matricule:</strong> {folder?.id_nature.matricule}
//               </Typography>
//             </>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={handleClose}>
//             Fermer
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </React.Fragment>
//   );
// }


























// import React, { useEffect } from 'react';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { FaTimes } from 'react-icons/fa';
// import { useGetFolderById } from '../../services/serviceFolder';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));

// export default function CustomizedDialogs({ open, setOpen, folderId }) {
//   const { data: folderData } = useGetFolderById(folderId);

//   useEffect(() => {
//     console.log('Folder Data:', folderData);
//   }, [folderData]);

//   return (
//     <React.Fragment>
//       <BootstrapDialog
//         onClose={() => setOpen(false)}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//           Informations du dossier
//         </DialogTitle>
//         <IconButton
//           aria-label="close"
//           onClick={() => setOpen(false)}
//           sx={(theme) => ({
//             position: 'absolute',
//             right: 8,
//             top: 8,
//             color: theme.palette.grey[500],
//           })}
//         >
//           <FaTimes />
//         </IconButton>
//         <DialogContent dividers>
//           <Typography variant="h6" gutterBottom>
//             Détails du dossier
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             ID du dossier: {folderData?._id || 'Non disponible'}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             Numéro de bordereau: {folderData?.numero_bordereaux || 'Non disponible'}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             Date de départ: {new Date(folderData?.date_depart).toLocaleDateString() || 'Non disponible'}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             Expéditeur: {folderData?.expiditeur || 'Non disponible'}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             Destination: {folderData?.destination || 'Non disponible'}
//           </Typography>
//           <Typography variant="h6" gutterBottom>
//             Informations de l'expéditeur
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             Nom: {folderData?.id_nature?.nom_depose || 'Non disponible'}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             Prénom: {folderData?.id_nature?.prenom_depose || 'Non disponible'}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             Matricule: {folderData?.id_nature?.matricule || 'Non disponible'}
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={() => setOpen(false)}>
//             Fermer
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </React.Fragment>
//   );
// }




























import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FaTimes } from 'react-icons/fa'; 
import { useGetFolderById } from '../../services/serviceFolder';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3), // Augmentation du padding pour plus d'espace
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
  },
  '& .MuiPaper-root': { // Customisation de la taille du modal
    minWidth: '600px', // Largeur minimale du modal
    minHeight: '400px', // Hauteur minimale du modal
  },
}));

export default function CustomizedDialogs({ open, setOpen, folderId }) {
  const handleClose = () => {
    setOpen(false);
  };

  // Récupération des données du dossier par ID
  const { data: folderData, isLoading, error } = useGetFolderById(folderId);

  // Gestion des états de chargement et des erreurs
  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur lors de la récupération des données.</div>;
  }

  // Récupération des données du dossier
  const folder = folderData?.data;

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 3 }} id="customized-dialog-title">
          Informations du dossier
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <FaTimes />
        </IconButton>
        <DialogContent dividers>
          {/* Affichage des données du dossier */}
          <Typography gutterBottom>
            <strong>Numéro de bordereau:</strong> {folder?.numero_bordereaux}
          </Typography>
          <Typography gutterBottom>
            <strong>Date de départ:</strong> {new Date(folder?.date_depart).toLocaleDateString()}
          </Typography>
          <Typography gutterBottom>
            <strong>Expéditeur:</strong> {folder?.expiditeur}
          </Typography>
          <Typography gutterBottom>
            <strong>Destination:</strong> {folder?.destination}
          </Typography>
          {/* Affichage des informations de la nature */}
          {folder?.id_nature && (
            <>
              <Typography gutterBottom>
                <strong>Description:</strong> {folder?.id_nature.description}
              </Typography>
              <Typography gutterBottom>
                <strong>Nom déposé:</strong> {folder?.id_nature.nom_depose}
              </Typography>
              <Typography gutterBottom>
                <strong>Prénom déposé:</strong> {folder?.id_nature.prenom_depose}
              </Typography>
              <Typography gutterBottom>
                <strong>Matricule:</strong> {folder?.id_nature.matricule}
              </Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Fermer
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
