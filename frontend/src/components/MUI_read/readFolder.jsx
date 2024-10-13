

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
// import { motion } from 'framer-motion';
// import { Fade } from 'react-reveal';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(3), // Augmentation du padding pour plus d'espace
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiPaper-root': { // Customisation de la taille du modal
//     minWidth: '600px', // Largeur minimale du modal
//     minHeight: '400px', // Hauteur minimale du modal
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
//     <motion.div initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.8 }}>
//       <React.Fragment>
//         <BootstrapDialog
//           onClose={handleClose}
//           aria-labelledby="customized-dialog-title"
//           open={open}
//         >
//           <DialogTitle sx={{ m: 0, p: 3 }} id="customized-dialog-title">
//             Informations du dossier
//           </DialogTitle>
//           <IconButton
//             aria-label="close"
//             onClick={handleClose}
//             sx={(theme) => ({
//               position: 'absolute',
//               right: 8,
//               top: 8,
//               color: theme.palette.grey[500],
//             })}
//           >
//             <FaTimes />
//           </IconButton>
//           <DialogContent dividers>
//             <Fade bottom>
//               <Typography gutterBottom>
//                 <strong>Numéro de bordereau:</strong> {folder?.numero_bordereaux}
//               </Typography>
//               <Typography gutterBottom>
//                 <strong>Date de départ:</strong> {new Date(folder?.date_depart).toLocaleDateString()}
//               </Typography>
//               <Typography gutterBottom>
//                 <strong>Expéditeur:</strong> {folder?.expiditeur}
//               </Typography>
//               <Typography gutterBottom>
//                 <strong>Destination:</strong> {folder?.destination}
//               </Typography>
//               {folder?.id_nature && (
//                 <>
//                   <Typography gutterBottom>
//                     <strong>Description:</strong> {folder?.id_nature.description}
//                   </Typography>
//                   <Typography gutterBottom>
//                     <strong>Nom déposé:</strong> {folder?.id_nature.nom_depose}
//                   </Typography>
//                   <Typography gutterBottom>
//                     <strong>Prénom déposé:</strong> {folder?.id_nature.prenom_depose}
//                   </Typography>
//                   <Typography gutterBottom>
//                     <strong>Matricule:</strong> {folder?.id_nature.matricule}
//                   </Typography>
//                 </>
//               )}
//             </Fade>
//           </DialogContent>
//           <DialogActions>
//             <Button autoFocus onClick={handleClose}>
//               Fermer
//             </Button>
//           </DialogActions>
//         </BootstrapDialog>
//       </React.Fragment>
//     </motion.div>
//   );
// }




























import React from 'react';
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
import { motion } from 'framer-motion';
import { Fade } from 'react-reveal';

// Style du modal
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
  },
  '& .MuiPaper-root': {
    minWidth: '600px',
    minHeight: '400px',
  },
  // Ajoutez un style pour centrer le texte
  '& .custom-text': {
    textAlign: 'center', // Centre le texte
    fontSize: '1.2rem', // Augmente la taille de la police
    lineHeight: '1.6', // Augmente l'espace entre les lignes
  },
}));

// Ajout d'un style pour l'en-tête
const LogoHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(2), // Ajoute un espacement en bas
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
    <motion.div initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}>
      <React.Fragment>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 3 }} id="customized-dialog-title">
            <LogoHeader>
              {/* Ajoutez votre logo ici */}
              <img src="/path/to/your/logo.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
              <Typography variant="h6">Informations du dossier</Typography>
            </LogoHeader>
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
            <Fade bottom>
              <Typography className="custom-text" gutterBottom>
                <strong>Numéro de bordereau:</strong> {folder?.numero_bordereaux}
              </Typography>
              <Typography className="custom-text" gutterBottom>
                <strong>Date de départ:</strong> {new Date(folder?.date_depart).toLocaleDateString()}
              </Typography>
              <Typography className="custom-text" gutterBottom>
                <strong>Expéditeur:</strong> {folder?.expiditeur}
              </Typography>
              <Typography className="custom-text" gutterBottom>
                <strong>Destination:</strong> {folder?.destination}
              </Typography>
              {folder?.id_nature && (
                <>
                  <Typography className="custom-text" gutterBottom>
                    <strong>Description:</strong> {folder?.id_nature.description}
                  </Typography>
                  <Typography className="custom-text" gutterBottom>
                    <strong>Nom déposé:</strong> {folder?.id_nature.nom_depose}
                  </Typography>
                  <Typography className="custom-text" gutterBottom>
                    <strong>Prénom déposé:</strong> {folder?.id_nature.prenom_depose}
                  </Typography>
                  <Typography className="custom-text" gutterBottom>
                    <strong>Matricule:</strong> {folder?.id_nature.matricule}
                  </Typography>
                </>
              )}
            </Fade>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Fermer
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>
    </motion.div>
  );
}
