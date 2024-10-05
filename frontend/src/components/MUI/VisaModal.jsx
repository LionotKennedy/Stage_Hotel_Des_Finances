
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Slide, TextField, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useAddVisa, useGetVisaById, useUpdateVisa } from '../../services/serviceVisa';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.1 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.1 }
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function VisaModal({ open, handleClose, folderId, mode, onSuccess }) {
  const [fields, setFields] = useState({
    numero_visa: '',
    nom_depose_visa: '',
    prenom_depose_visa: '',
    reference: '',
  });

  const [error, setError] = useState('');
  const addVisaMutation = useAddVisa();
  const { data: folderData } = useGetVisaById(folderId);
  const updateVisaMutation = useUpdateVisa(); 
  useEffect(() => {
    if (folderData && folderData.data) {
    //   const formattedDateDepart = new Date(folderData.data.date_depart).toISOString().split('T')[0];
      setFields(prevFields => ({
        ...prevFields,
        numero_visa: folderData.data.numero_visa || '',
        nom_depose_visa: folderData.data.nom_depose_visa || '',
        prenom_depose_visa: folderData.data.prenom_depose_visa || '',
        reference: folderData.data.reference || '',
      }));
    }

    console.log(folderData);
  }, [folderData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields(prevFields => ({ ...prevFields, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!fields.numero_visa || !fields.nom_depose_visa) {
      setError('Veuillez remplir tous les champs requis.');
      return;
    }

    // Vous pouvez formater à nouveau la date ici si nécessaire
    const formattedFields = {
      ...fields,
    //   date_depart: new Date(fields.date_depart).toISOString(), // Par exemple, si le backend attend un format ISO
    };
    try {
      if (mode === 'edit') {
        await updateVisaMutation.mutateAsync({ folderId, data: formattedFields }); // Utiliser la mutation pour mettre à jour
        console.log('Dossier mis à jour avec succès');
        console.log('Modification d\'un dossier');
      } else {
        await addVisaMutation.mutateAsync(formattedFields);
      }
      onSuccess();
      handleClose();
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
      aria-labelledby="custom-modal-slide-reference"
      maxWidth="sm"
      fullWidth
    >
      <AnimatePresence>
        {open && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {/* <DialogTitle>Formulaire Ajout Dossier</DialogTitle> */}
            <DialogTitle>{mode === 'add' ? 'Formulaire Ajout Visa' : 'Modifier Visa'}</DialogTitle>
            <DialogContent>
              <form>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="numero_visa"
                      label="Numéro visa"
                      variant="standard"
                      fullWidth
                      value={fields.numero_visa}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="nom_depose_visa"
                      label="Nom"
                      variant="standard"
                      fullWidth
                      value={fields.nom_depose_visa}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="prenom_depose_visa"
                      label="Prenom"
                      variant="standard"
                      fullWidth
                      value={fields.prenom_depose_visa}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="reference"
                      label="Reference"
                      variant="standard"
                      fullWidth
                      value={fields.reference}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Fermer</Button>
              <Button onClick={handleSubmit} variant="contained" color="primary">
                {mode === 'add' ? 'Confirmer' : 'Modifier'}
              </Button>
            </DialogActions>
          </motion.div>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
