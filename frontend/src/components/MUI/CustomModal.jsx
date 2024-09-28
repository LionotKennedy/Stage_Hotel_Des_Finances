
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Slide, TextField, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useAddFolder, useGetFolderById, useUpdateFolder } from '../../services/serviceFolder';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.1 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.1 }
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomModal({ open, handleClose, folderId, mode }) {
  const [fields, setFields] = useState({
    numero_bordereaux: '',
    date_depart: '',
    expiditeur: '',
    destination: '',
    description: '',
    nom_depose: '',
    prenom_depose: '',
    matricule: '',
  });

  const [error, setError] = useState('');
  const addFolderMutation = useAddFolder();
  const { data: folderData } = useGetFolderById(folderId);
  const updateFolderMutation = useUpdateFolder(); // Hook pour mettre à jour un dossier

  useEffect(() => {
    // Vérifiez si folderData et folderData.data existent
    if (folderData && folderData.data) {
      const formattedDateDepart = new Date(folderData.data.date_depart).toISOString().split('T')[0];
      setFields(prevFields => ({
        ...prevFields,
        numero_bordereaux: folderData.data.numero_bordereaux || '',
        // date_depart: folderData.data.date_depart || '',
        date_depart: formattedDateDepart || '', // Formater ici
        expiditeur: folderData.data.expiditeur || '',
        destination: folderData.data.destination || '',
        description: folderData.data.id_nature.description || '',
        nom_depose: folderData.data.id_nature.nom_depose || '',
        prenom_depose: folderData.data.id_nature.prenom_depose || '',
        matricule: folderData.data.id_nature.matricule || '',
      }));
    }

    console.log(folderData);
  }, [folderData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields(prevFields => ({ ...prevFields, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!fields.numero_bordereaux || !fields.date_depart || !fields.expiditeur) {
      setError('Veuillez remplir tous les champs requis.');
      return;
    }

    // Vous pouvez formater à nouveau la date ici si nécessaire
    const formattedFields = {
      ...fields,
      date_depart: new Date(fields.date_depart).toISOString(), // Par exemple, si le backend attend un format ISO
    };

    // try {
    //   await addFolderMutation.mutateAsync(formattedFields);
    //   handleClose();
    // } catch (error) {
    //   console.error('Erreur lors de l\'envoi du formulaire:', error);
    //   setError('Une erreur est survenue lors de l\'ajout du dossier.');
    // }



    try {
      if (mode === 'edit') {
        // Logique pour modifier un dossier
        // Vous devez implémenter ici la logique pour mettre à jour un dossier existant
        // Par exemple, vous pourriez utiliser une mutation GraphQL pour mettre à jour un dossier
        await updateFolderMutation.mutateAsync({ folderId, data: formattedFields }); // Utiliser la mutation pour mettre à jour
        console.log('Dossier mis à jour avec succès');
        console.log('Modification d\'un dossier');
      } else {
        await addFolderMutation.mutateAsync(formattedFields);
      }
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
      aria-labelledby="custom-modal-slide-description"
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
            <DialogTitle>{mode === 'add' ? 'Formulaire Ajout Dossier' : 'Modifier Dossier'}</DialogTitle>
            <DialogContent>
              <form>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="numero_bordereaux"
                      label="Numéro Bordereaux"
                      variant="standard"
                      fullWidth
                      value={fields.numero_bordereaux}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="date"
                      name="date_depart"
                      label="Date Départ"
                      variant="standard"
                      fullWidth
                      value={fields.date_depart}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="expiditeur"
                      label="Expediteur"
                      variant="standard"
                      fullWidth
                      value={fields.expiditeur}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="destination"
                      label="Destination"
                      variant="standard"
                      fullWidth
                      value={fields.destination}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="description"
                      label="Description"
                      variant="standard"
                      fullWidth
                      value={fields.description}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="nom_depose"
                      label="Nom Déposé"
                      variant="standard"
                      fullWidth
                      value={fields.nom_depose}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="prenom_depose"
                      label="Prénom Déposé"
                      variant="standard"
                      fullWidth
                      value={fields.prenom_depose}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="matricule"
                      label="Matricule"
                      variant="standard"
                      fullWidth
                      value={fields.matricule}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Fermer</Button>
              {/* <Button onClick={handleSubmit} variant="contained" color="primary">
                Confirmer
              </Button> */}

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
