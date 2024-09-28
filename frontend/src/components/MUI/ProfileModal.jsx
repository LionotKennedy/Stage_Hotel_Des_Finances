// import * as React from 'react';
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
// import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function FullScreenDialog({ open, handleClose }) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open full-screen dialog
//       </Button>
//       <Dialog
//         fullScreen
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Transition}
//       >
//         <AppBar sx={{ position: 'relative' }}>
//           <Toolbar>
//             <IconButton
//               edge="start"
//               color="inherit"
//               onClick={handleClose}
//               aria-label="close"
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//               Sound
//             </Typography>
//             <Button autoFocus color="inherit" onClick={handleClose}>
//               save
//             </Button>
//           </Toolbar>
//         </AppBar>
//         <List>
//           <ListItemButton>
//             <ListItemText primary="Phone ringtone" secondary="Titania" />
//           </ListItemButton>
//           <Divider />
//           <ListItemButton>
//             <ListItemText
//               primary="Default notification ringtone"
//               secondary="Tethys"
//             />
//           </ListItemButton>
//         </List>
//       </Dialog>
//     </React.Fragment>
//   );
// }














// import * as React from 'react';
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
// import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function FullScreenDialog({ open, handleClose }) {  // Accepter open et handleClose en tant que props
//   return (
//     <Dialog
//       fullScreen
//       open={open}  // Utilisez l'état passé en props
//       onClose={handleClose}  // Utilisez la fonction passée en props
//       TransitionComponent={Transition}
//     >
//       <AppBar sx={{ position: 'relative' }}>
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             onClick={handleClose}  // Fermer le dialogue lorsqu'on clique sur Close
//             aria-label="close"
//           >
//             <CloseIcon />
//           </IconButton>
//           <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//             Sound
//           </Typography>
//           <Button autoFocus color="inherit" onClick={handleClose}>
//             save
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <List>
//         <ListItemButton>
//           <ListItemText primary="Phone ringtone" secondary="Titania" />
//         </ListItemButton>
//         <Divider />
//         <ListItemButton>
//           <ListItemText primary="Default notification ringtone" secondary="Tethys" />
//         </ListItemButton>
//       </List>
//     </Dialog>
//   );
// }



































// import * as React from 'react';
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
// // import CloseIcon from '@mui/icons-material/Close';
// import { FaTimes } from 'react-icons/fa';  // Import de l'icône depuis react-icons
// import Slide from '@mui/material/Slide';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function FullScreenDialog({ open, handleClose }) {
//   return (
//     <React.Fragment>
//       <Dialog
//         fullScreen
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Transition}
//       >
//         <AppBar sx={{ position: 'relative' }}>
//           <Toolbar>
//             <IconButton
//               edge="start"
//               color="inherit"
//               onClick={handleClose}
//               aria-label="close"
//             >
//               {/* <CloseIcon /> */}
//               <FaTimes /> {/* Remplacement de CloseIcon par FaTimes */}
//             </IconButton>
//             <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//               Sound
//             </Typography>
//             <Button autoFocus color="inherit" onClick={handleClose}>
//               save
//             </Button>
//           </Toolbar>
//         </AppBar>
//         <List>
//           <ListItemButton>
//             <ListItemText primary="Phone ringtone" secondary="Titania" />
//           </ListItemButton>
//           <Divider />
//           <ListItemButton>
//             <ListItemText
//               primary="Default notification ringtone"
//               secondary="Tethys"
//             />
//           </ListItemButton>
//         </List>
//       </Dialog>
//     </React.Fragment>
//   );
// }





























import * as React from 'react';
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
// import CloseIcon from '@mui/icons-material/Close';
import { FaTimes } from 'react-icons/fa';  // Import de l'icône depuis react-icons
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, handleClose }) {
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
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItemButton>
        </List>
      </Dialog>
    </React.Fragment>
  );
}
