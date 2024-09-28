
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
import { useGetVisaById } from '../../services/serviceVisa';

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

export default function CustomizedVisaDialogs({ open, setOpen, folderId }) {
  const handleClose = () => {
    setOpen(false);
  };

  // Récupération des données du dossier par ID
  const { data: folderData, isLoading, error } = useGetVisaById(folderId);

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
            <strong>Numéro de visa:</strong> {folder?.numero_visa}
          </Typography>
          <Typography gutterBottom>
            <strong>Nom:</strong> {folder?.nom_depose_visa}
          </Typography>
          <Typography gutterBottom>
            <strong>Prenom:</strong> {folder?.prenom_depose_visa}
          </Typography>
          <Typography gutterBottom>
            <strong>Reference:</strong> {folder?.reference}
          </Typography>
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
