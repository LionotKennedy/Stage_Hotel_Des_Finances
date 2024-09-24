// src/components/modal/CustomModal.js
// import React from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

// export default function CustomModal({ open, handleClose }) {
//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>Modale simple</DialogTitle>
//       <DialogContent>
//         <p>Ceci est le contenu de la modale.</p>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Fermer</Button>
//         <Button onClick={handleClose} variant="contained" color="primary">
//           Confirmer
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }















// // src/components/modal/CustomModal.js
// import React from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function CustomModal({ open, handleClose }) {
//   return (
//     <AnimatePresence>
//       {open && (
//         <Dialog open={open} onClose={handleClose}>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.3 }}
//           >
//             <DialogTitle>Modale avec Animation</DialogTitle>
//             <DialogContent>
//               <p>Ceci est le contenu de la modale.</p>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose}>Fermer</Button>
//               <Button onClick={handleClose} variant="contained" color="primary">
//                 Confirmer
//               </Button>
//             </DialogActions>
//           </motion.div>
//         </Dialog>
//       )}
//     </AnimatePresence>
//   );
// }













// // src/components/modal/CustomModal.js
// import React from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function CustomModal({ open, handleClose }) {
//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           initial={{ opacity: 0, y: '-100vh' }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: '-100vh' }}
//           transition={{ duration: 0.5 }}
//         >
//           <Dialog open={open} onClose={handleClose}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//             >
//               <DialogTitle>Modale avec Animation</DialogTitle>
//               <DialogContent>
//                 <p>Ceci est le contenu de la modale.</p>
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={handleClose}>Fermer</Button>
//                 <Button onClick={handleClose} variant="contained" color="primary">
//                   Confirmer
//                 </Button>
//               </DialogActions>
//             </motion.div>
//           </Dialog>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

















// src/components/modal/CustomModal.js
// import React from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function CustomModal({ open, handleClose }) {
//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -100 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Dialog open={open} onClose={handleClose}>
//             <DialogTitle>Modale avec Animation</DialogTitle>
//             <DialogContent>
//               <p>Ceci est le contenu de la modale.</p>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose}>Fermer</Button>
//               <Button onClick={handleClose} variant="contained" color="primary">
//                 Confirmer
//               </Button>
//             </DialogActions>
//           </Dialog>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

























// // src/components/modal/CustomModal.js
// import React from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Slide } from '@mui/material';

// // Transition pour le slide
// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function CustomModal({ open, handleClose }) {
//   return (
//     <Dialog
//       open={open}
//       TransitionComponent={Transition}
//       keepMounted
//       onClose={handleClose}
//       aria-describedby="custom-modal-slide-description"
//     >
//       <DialogTitle>Modale avec Slide</DialogTitle>
//       <DialogContent>
//         <p>Ceci est le contenu de la modale.</p>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Fermer</Button>
//         <Button onClick={handleClose} variant="contained" color="primary">
//           Confirmer
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }


























// // src/components/modal/CustomModal.js
// import React from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Slide } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// // Définition des variantes d'animation pour Framer Motion
// const modalVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1 },
//   exit: { opacity: 0, scale: 0.8 }
// };

// // Transition pour le slide (ouverture/fermeture de la modale)
// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function CustomModal({ open, handleClose }) {
//   return (
//     <Dialog
//       open={open}
//       TransitionComponent={Transition}
//       keepMounted
//       onClose={handleClose}
//       aria-describedby="custom-modal-slide-description"
//     >
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             variants={modalVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             transition={{ duration: 0.5 }}
//           >
//             <DialogTitle>Modale avec Slide et Framer Motion</DialogTitle>
//             <DialogContent>
//               <p>Ceci est le contenu de la modale avec animation.</p>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose}>Fermer</Button>
//               <Button onClick={handleClose} variant="contained" color="primary">
//                 Confirmer
//               </Button>
//             </DialogActions>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </Dialog>
//   );
// }

































// // src/components/modal/CustomModal.js
// import React from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Slide, TextField, Grid } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// // Définition des variantes d'animation pour Framer Motion
// const modalVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1 },
//   exit: { opacity: 0, scale: 0.8 }
// };

// // Transition pour le slide (ouverture/fermeture de la modale)
// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function CustomModal({ open, handleClose }) {
//   return (
//     <Dialog
//       open={open}
//       TransitionComponent={Transition}
//       keepMounted
//       onClose={handleClose}
//       aria-describedby="custom-modal-slide-description"
//       maxWidth="sm" // Taille maximale de la modale (small, medium, large)
//       fullWidth // Assure que la modale prenne toute la largeur disponible
//     >
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             variants={modalVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             transition={{ duration: 0.5 }}
//           >
//             <DialogTitle>Formulaire Responsive</DialogTitle>
//             <DialogContent>
//               <form>
//                 <Grid container spacing={2}>
//                   {/* Champs du formulaire */}
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       id="field1"
//                       label="Champ 1"
//                       variant="filled"
//                       fullWidth
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       id="field2"
//                       label="Champ 2"
//                       variant="standard"
//                       fullWidth
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       id="field3"
//                       label="Champ 3"
//                       variant="standard"
//                       fullWidth
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       id="field4"
//                       label="Champ 4"
//                       variant="standard"
//                       fullWidth
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       id="field5"
//                       label="Champ 5"
//                       variant="standard"
//                       fullWidth
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       id="field6"
//                       label="Champ 6"
//                       variant="standard"
//                       fullWidth
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       id="field7"
//                       label="Champ 7"
//                       variant="standard"
//                       fullWidth
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       id="field8"
//                       label="Champ 8"
//                       variant="standard"
//                       fullWidth
//                     />
//                   </Grid>
//                 </Grid>
//               </form>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose}>Fermer</Button>
//               <Button onClick={handleClose} variant="contained" color="primary">
//                 Confirmer
//               </Button>
//             </DialogActions>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </Dialog>
//   );
// }


























// src/components/modal/CustomModal.js
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Slide, TextField, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

// Définition des variantes d'animation pour Framer Motion
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

// Transition pour le slide (ouverture/fermeture de la modale)
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomModal({ open, handleClose }) {
  // États pour gérer les valeurs des champs
  const [fields, setFields] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
    field7: '',
    field8: ''
  });

  // États pour gérer les erreurs
  const [errors, setErrors] = useState({});

  // Gérer la modification des champs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [id]: value
    }));
  };

  // Validation du formulaire
  const validateForm = () => {
    const newErrors = {};
    Object.keys(fields).forEach((key) => {
      if (!fields[key]) {
        newErrors[key] = true; // Marquer les champs vides comme erreur
      }
    });
    setErrors(newErrors);
    // Retourner true si tous les champs sont remplis
    return Object.keys(newErrors).length === 0;
  };

  // Gérer la soumission du formulaire
  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Formulaire valide :", fields);
      handleClose(); // Ferme la modale si le formulaire est valide
    } else {
      console.log("Formulaire invalide");
    }
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="custom-modal-slide-description"
      maxWidth="sm" // Taille maximale de la modale (small, medium, large)
      fullWidth // Assure que la modale prenne toute la largeur disponible
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
            <DialogTitle>Formulaire avec Validation</DialogTitle>
            <DialogContent>
              <form>
                <Grid container spacing={2}>
                  {/* Champs du formulaire avec validation */}
                  {Object.keys(fields).map((field, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <TextField
                        id={field}
                        label={`Champ ${index + 1}`}
                        variant="standard"
                        fullWidth
                        value={fields[field]}
                        onChange={handleChange}
                        error={!!errors[field]} // Affiche la bordure rouge si le champ est vide
                        helperText={errors[field] ? 'Ce champ est requis' : ''}
                      />
                    </Grid>
                  ))}
                </Grid>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Fermer</Button>
              <Button onClick={handleSubmit} variant="contained" color="primary">
                Confirmer
              </Button>
            </DialogActions>
          </motion.div>
        )}
      </AnimatePresence>
    </Dialog>
  );
}


























































// // src/components/modal/CustomModal.js
// import React, { useState } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// // Définition des variantes d'animation pour Framer Motion
// const modalVariants = {
//   hidden: { opacity: 0, scale: 0.5, y: '50%' }, // Zoom out avec un déplacement vers le bas
//   visible: { opacity: 1, scale: 1, y: '0%' },   // Zoom in vers la position normale
//   exit: { opacity: 0, scale: 0.5, y: '-50%' }   // Zoom out avec un déplacement vers le haut
// };

// export default function CustomModal({ open, handleClose }) {
//   // États pour gérer les valeurs des champs
//   const [fields, setFields] = useState({
//     field1: '',
//     field2: '',
//     field3: '',
//     field4: '',
//     field5: '',
//     field6: '',
//     field7: '',
//     field8: ''
//   });

//   // États pour gérer les erreurs
//   const [errors, setErrors] = useState({});

//   // Gérer la modification des champs
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFields((prevFields) => ({
//       ...prevFields,
//       [id]: value
//     }));
//   };

//   // Validation du formulaire
//   const validateForm = () => {
//     const newErrors = {};
//     Object.keys(fields).forEach((key) => {
//       if (!fields[key]) {
//         newErrors[key] = true; // Marquer les champs vides comme erreur
//       }
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Gérer la soumission du formulaire
//   const handleSubmit = () => {
//     if (validateForm()) {
//       console.log("Formulaire valide :", fields);
//       handleClose(); // Ferme la modale si le formulaire est valide
//     } else {
//       console.log("Formulaire invalide");
//     }
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       aria-describedby="custom-modal-slide-description"
//       maxWidth="sm" // Taille maximale de la modale
//       fullWidth
//       PaperComponent={({ children }) => (
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               transition={{ duration: 0.5 }}
//               style={{ overflow: 'hidden' }}
//             >
//               {children}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       )}
//     >
//       <DialogTitle>Formulaire avec Validation et Animation Zoom</DialogTitle>
//       <DialogContent>
//         <form>
//           <Grid container spacing={2}>
//             {/* Champs du formulaire avec validation */}
//             {Object.keys(fields).map((field, index) => (
//               <Grid item xs={12} sm={6} key={index}>
//                 <TextField
//                   id={field}
//                   label={`Champ ${index + 1}`}
//                   variant="standard"
//                   fullWidth
//                   value={fields[field]}
//                   onChange={handleChange}
//                   error={!!errors[field]} // Affiche la bordure rouge si le champ est vide
//                   helperText={errors[field] ? 'Ce champ est requis' : ''}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         </form>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Fermer</Button>
//         <Button onClick={handleSubmit} variant="contained" color="primary">
//           Confirmer
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }


































// // src/components/modal/CustomModal.js
// import React, { useState } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// // Définition des variantes d'animation pour le zoom
// const modalVariants = {
//   hidden: { opacity: 0, y: '100%', scale: 0.8 }, // Commence en bas avec un léger zoom
//   visible: { opacity: 1, y: 0, scale: 1 }, // Fait un zoom vers le centre
//   exit: { opacity: 0, y: '100%', scale: 0.8 } // Retourne vers le bas en réduisant sa taille
// };

// export default function CustomModal({ open, handleClose }) {
//   // États pour gérer les valeurs des champs
//   const [fields, setFields] = useState({
//     field1: '',
//     field2: '',
//     field3: '',
//     field4: '',
//     field5: '',
//     field6: '',
//     field7: '',
//     field8: ''
//   });

//   // États pour gérer les erreurs
//   const [errors, setErrors] = useState({});

//   // Gérer la modification des champs
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFields((prevFields) => ({
//       ...prevFields,
//       [id]: value
//     }));
//   };

//   // Validation du formulaire
//   const validateForm = () => {
//     const newErrors = {};
//     Object.keys(fields).forEach((key) => {
//       if (!fields[key]) {
//         newErrors[key] = true; // Marquer les champs vides comme erreur
//       }
//     });
//     setErrors(newErrors);
//     // Retourner true si tous les champs sont remplis
//     return Object.keys(newErrors).length === 0;
//   };

//   // Gérer la soumission du formulaire
//   const handleSubmit = () => {
//     if (validateForm()) {
//       console.log("Formulaire valide :", fields);
//       handleClose(); // Ferme la modale si le formulaire est valide
//     } else {
//       console.log("Formulaire invalide");
//     }
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       aria-describedby="custom-modal-slide-description"
//       maxWidth="sm"
//       fullWidth
//       PaperProps={{ // Pour retirer les styles par défaut de Material UI sur le dialog
//         style: { overflow: 'hidden', padding: 0, background: 'transparent' }
//       }}
//     >
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             variants={modalVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             transition={{ duration: 0.5 }} // Durée de l'animation
//             style={{ background: '#fff', borderRadius: '8px', padding: '16px' }} // Appliquer des styles pour un effet de modale
//           >
//             <DialogTitle>Formulaire avec Validation</DialogTitle>
//             <DialogContent>
//               <form>
//                 <Grid container spacing={2}>
//                   {/* Champs du formulaire avec validation */}
//                   {Object.keys(fields).map((field, index) => (
//                     <Grid item xs={12} sm={6} key={index}>
//                       <TextField
//                         id={field}
//                         label={`Champ ${index + 1}`}
//                         variant="standard"
//                         fullWidth
//                         value={fields[field]}
//                         onChange={handleChange}
//                         error={!!errors[field]} // Affiche la bordure rouge si le champ est vide
//                         helperText={errors[field] ? 'Ce champ est requis' : ''}
//                       />
//                     </Grid>
//                   ))}
//                 </Grid>
//               </form>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose}>Fermer</Button>
//               <Button onClick={handleSubmit} variant="contained" color="primary">
//                 Confirmer
//               </Button>
//             </DialogActions>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </Dialog>
//   );
// }



























// // src/components/modal/CustomModal.js
// import React, { useState } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// // Définition des variantes d'animation pour le zoom
// const modalVariants = {
//   hidden: { opacity: 0, y: '100%', scale: 0.8 }, // Commence en bas avec un léger zoom
//   visible: { opacity: 1, y: 0, scale: 1 }, // Fait un zoom vers le centre
//   exit: { opacity: 0, y: '100%', scale: 0.8 } // Retourne vers le bas en réduisant sa taille
// };

// export default function CustomModal({ open, handleClose }) {
//   // États pour gérer les valeurs des champs
//   const [fields, setFields] = useState({
//     field1: '',
//     field2: '',
//     field3: '',
//     field4: '',
//     field5: '',
//     field6: '',
//     field7: '',
//     field8: ''
//   });

//   // États pour gérer les erreurs
//   const [errors, setErrors] = useState({});

//   // Gérer la modification des champs
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFields((prevFields) => ({
//       ...prevFields,
//       [id]: value
//     }));
//   };

//   // Validation du formulaire
//   const validateForm = () => {
//     const newErrors = {};
//     Object.keys(fields).forEach((key) => {
//       if (!fields[key]) {
//         newErrors[key] = true; // Marquer les champs vides comme erreur
//       }
//     });
//     setErrors(newErrors);
//     // Retourner true si tous les champs sont remplis
//     return Object.keys(newErrors).length === 0;
//   };

//   // Gérer la soumission du formulaire
//   const handleSubmit = () => {
//     if (validateForm()) {
//       console.log("Formulaire valide :", fields);
//       handleClose(); // Ferme la modale si le formulaire est valide
//     } else {
//       console.log("Formulaire invalide");
//     }
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       aria-describedby="custom-modal-slide-description"
//       maxWidth="sm"
//       fullWidth
//       PaperProps={{
//         style: { overflow: 'hidden', padding: 0, background: 'transparent' }
//       }}
//     >
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             variants={modalVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             transition={{ duration: 0.5 }} // Durée de l'animation
//             style={{ background: '#fff', borderRadius: '8px', padding: '16px' }} // Appliquer des styles pour un effet de modale
//           >
//             <DialogTitle>Formulaire avec Validation</DialogTitle>
//             <DialogContent>
//               <form>
//                 <Grid container spacing={2}>
//                   {/* Champs du formulaire avec validation */}
//                   {Object.keys(fields).map((field, index) => (
//                     <Grid item xs={12} sm={6} key={index}>
//                       <TextField
//                         id={field}
//                         label={`Champ ${index + 1}`}
//                         variant="standard"
//                         fullWidth
//                         value={fields[field]}
//                         onChange={handleChange}
//                         error={!!errors[field]} // Affiche la bordure rouge si le champ est vide
//                         helperText={errors[field] ? 'Ce champ est requis' : ''}
//                       />
//                     </Grid>
//                   ))}
//                 </Grid>
//               </form>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose}>Fermer</Button>
//               <Button onClick={handleSubmit} variant="contained" color="primary">
//                 Confirmer
//               </Button>
//             </DialogActions>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </Dialog>
//   );
// }






































// // src/components/modal/CustomModal.js
// import React, { useState } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// // Définition des variantes d'animation pour le zoom
// const modalVariants = {
//   hidden: { opacity: 0, y: '100%', scale: 0.8 }, // Commence en bas avec un léger zoom
//   visible: { opacity: 1, y: 0, scale: 1 }, // Fait un zoom vers le centre
//   exit: { opacity: 0, y: '100%', scale: 0.8 } // Retourne vers le bas en réduisant sa taille
// };

// export default function CustomModal({ open, handleClose }) {
//   // États pour gérer les valeurs des champs
//   const [fields, setFields] = useState({
//     field1: '',
//     field2: '',
//     field3: '',
//     field4: '',
//     field5: '',
//     field6: '',
//     field7: '',
//     field8: ''
//   });

//   // États pour gérer les erreurs
//   const [errors, setErrors] = useState({});

//   // Gérer la modification des champs
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFields((prevFields) => ({
//       ...prevFields,
//       [id]: value
//     }));
//   };

//   // Validation du formulaire
//   const validateForm = () => {
//     const newErrors = {};
//     Object.keys(fields).forEach((key) => {
//       if (!fields[key]) {
//         newErrors[key] = true; // Marquer les champs vides comme erreur
//       }
//     });
//     setErrors(newErrors);
//     // Retourner true si tous les champs sont remplis
//     return Object.keys(newErrors).length === 0;
//   };

//   // Gérer la soumission du formulaire
//   const handleSubmit = () => {
//     if (validateForm()) {
//       console.log("Formulaire valide :", fields);
//       handleClose(); // Ferme la modale si le formulaire est valide
//     } else {
//       console.log("Formulaire invalide");
//     }
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       aria-describedby="custom-modal-slide-description"
//       maxWidth="sm"
//       fullWidth
//       PaperProps={{
//         style: { overflow: 'hidden', padding: 0, background: 'transparent' }
//       }}
//     >
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             variants={modalVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             transition={{ duration: 0.4 }} // Durée de l'animation
//             style={{ background: '#fff', borderRadius: '10px', padding: '36px' }} // Appliquer des styles pour un effet de modale
//           >
//             <DialogTitle>Formulaire avec Validation</DialogTitle>
//             <DialogContent>
//               <form>
//                 <Grid container spacing={2}>
//                   {/* Champs du formulaire avec validation */}
//                   {Object.keys(fields).map((field, index) => (
//                     <Grid item xs={12} sm={6} key={index}>
//                       <TextField
//                         id={field}
//                         label={`Champ ${index + 1}`}
//                         variant="standard"
//                         fullWidth
//                         value={fields[field]}
//                         onChange={handleChange}
//                         error={!!errors[field]} // Affiche la bordure rouge si le champ est vide
//                         helperText={errors[field] ? 'Ce champ est requis' : ''}
//                       />
//                     </Grid>
//                   ))}
//                 </Grid>
//               </form>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose}>Fermer</Button>
//               <Button onClick={handleSubmit} variant="contained" color="primary">
//                 Confirmer
//               </Button>
//             </DialogActions>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </Dialog>
//   );
// }
