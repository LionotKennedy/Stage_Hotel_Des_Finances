// const location = useLocation();
// const navigate = useNavigate();
// const userId = location.state?.userId;
// const { mutate: updateUser } = useUpdateUser();
// const { enqueueSnackbar } = useSnackbar();

// const { data: userData, error, isLoading } = useGetUserById(userId);
// console.log(userData);

// const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     image: null
// });
// const [imagePreview, setImagePreview] = useState('');

// useEffect(() => {
//     if (userData && userData.data) {
//         setFormData({
//             name: userData.data.name || '',
//             email: userData.data.email || '',
//             image: userData.data.image
//         });

//         setImagePreview(userData.data.image);
//         console.log(userData.data.image);
//     }
// }, [userData]);

// const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image') {
//         setFormData({ ...formData, [name]: files[0] });
//         setImagePreview(URL.createObjectURL(files[0]));
//     } else {
//         setFormData({ ...formData, [name]: value });
//     }
// };



// const handleSubmit = (e) => {
//     e.preventDefault();




//     updateUser({ userId, data: formData }, {
//         onSuccess: () => {
//             // console.log('Utilisateur mis à jour avec succès');
//             setFormData({ name: '', email: '', image: null });
//             setImagePreview('');
//             navigate('/profile');
//             enqueueSnackbar('Utilisateur mis à jour avec succès', {
//                 variant: 'success',
//                 anchorOrigin: {
//                     vertical: 'top',
//                     horizontal: 'center',
//                 },
//                 autoHideDuration: 5000,
//                 action: (
//                     <IconButton size="small" onClick={() => { }}>
//                         <AiOutlineClose fontSize="small" />  {/* Utilisation de AiOutlineClose ici */}
//                     </IconButton>
//                 ),
//                 style: {
//                     backgroundColor: '#4caf50',
//                     color: '#ffffff',
//                 },
//             });
//         },
//         onError: (error) => {
//             console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
//         }
//     });

// };



































































































// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './userpage.scss'; // Assurez-vous d'avoir un fichier CSS pour le style
// import { useGetUserById } from '../../services/serviceUser'; // Ajuste le chemin en fonction de l'emplacement de ton fichier
// import { useUpdateUser } from '../../services/serviceUser'; // Ajuste le chemin si nécessaire
// import { FaArrowLeft } from 'react-icons/fa';
// import { FaFileImage, FaImages, FaImage, FaRegFileImage } from 'react-icons/fa';
// import { useSnackbar } from 'notistack';
// import { AiOutlineClose } from 'react-icons/ai';
// import IconButton from '@mui/material/IconButton';


// const UserPage = () => {

//     const location = useLocation();
//     const navigate = useNavigate();
//     const userId = location.state?.userId;
//     const { mutate: updateUser } = useUpdateUser();
//     const { enqueueSnackbar } = useSnackbar();

//     const { data: userData, error, isLoading } = useGetUserById(userId);
//     console.log(userData);

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         image: null
//     });
//     const [imagePreview, setImagePreview] = useState('');

//     useEffect(() => {
//         if (userData && userData.data) {
//             setFormData(prevData => ({
//                 ...prevData,
//                 name: userData.data.name || '',
//                 email: userData.data.email || '',
//                 image: userData.data.image ? new File([userData.data.image], 'profile.jpg', {type: 'image/jpeg'}) : null
//             }));

//             // setImagePreview(userData.data.image ? URL.createObjectURL(new Blob([userData.data.image])) : '');
//             setImagePreview(userData.data.image);
//         }
//     }, [userData]);

//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         if (name === 'image') {
//             setFormData({ ...formData, [name]: files[0] });
//             setImagePreview(URL.createObjectURL(files[0]));
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         let updateData = {};

//         if (formData.name) {
//             updateData.name = formData.name;
//         }

//         if (formData.email) {
//             updateData.email = formData.email;
//         }

//         if (formData.image) {
//             updateData.image = formData.image;
//         }

//         console.log('FormData:', updateData);

//         try {
//             await updateUser({ userId, data: updateData }, {
//                 onSuccess: () => {
//                     setFormData({ name: '', email: '', image: null });
//                     setImagePreview('');
//                     navigate('/profile');
//                     enqueueSnackbar('Utilisateur mis à jour avec succès', {
//                         variant: 'success',
//                         anchorOrigin: {
//                             vertical: 'top',
//                             horizontal: 'center',
//                         },
//                         autoHideDuration: 5000,
//                         action: (
//                             <IconButton size="small" onClick={() => { }}>
//                                 <AiOutlineClose fontSize="small" />
//                             </IconButton>
//                         ),
//                         style: {
//                             backgroundColor: '#4caf50',
//                             color: '#ffffff',
//                         },
//                     });
//                 },
//                 onError: (error) => {
//                     console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
//                     enqueueSnackbar('Erreur lors de la mise à jour du profil', {
//                         variant: 'error',
//                         anchorOrigin: {
//                             vertical: 'top',
//                             horizontal: 'center',
//                         },
//                         autoHideDuration: 5000,
//                     });
//                 }
//             });
//         } catch (error) {
//             console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
//             enqueueSnackbar('Erreur lors de la mise à jour du profil', {
//                 variant: 'error',
//                 anchorOrigin: {
//                     vertical: 'top',
//                     horizontal: 'center',
//                 },
//                 autoHideDuration: 5000,
//             });
//         }
//     };




//     const handleBackClick = () => {
//         navigate('/profile');
//     };

//     return (
//         <div className='container__users'>
//             <div className='content__headers'>
//                 <div className='icon__back'>
//                     <FaArrowLeft
//                         className='back__icon'
//                         onClick={handleBackClick}
//                         size={44}
//                         style={{ cursor: 'pointer' }}
//                     />
//                 </div>
//                 <div className='title__profile'>
//                     <span>Modification du profile</span>
//                 </div>
//                 {userId ? (
//                     <div className='id__import'>
//                         <p>ID Utilisateur: {userId}</p>
//                     </div>
//                 ) : (
//                     <p>ID utilisateur non trouvé.</p>
//                 )}
//                 {isLoading && <p>Chargement des données...</p>}
//                 {error && <p>Erreur lors de la récupération des données utilisateur: {error.message}</p>}
//             </div>

//             <form onSubmit={handleSubmit} className="user-form" encType="multipart/form-data">
//                 <div className='container__form'>
//                     <div className='image___recive'>
//                         {imagePreview && <img src={imagePreview} alt="Prévisualisation" className="image-preview" />} {/* Affiche l'image prévisualisée */}
//                     </div>
//                     <div className='content__form'>
//                         <div className="form-group">
//                             <label htmlFor="name">Nom:</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 placeholder="Nom d'utilisateur"
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="email">Email:</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 placeholder='Adresse email'
//                                 required
//                             />
//                         </div>
//                         <div className="form-group content__input">
//                             <label htmlFor="image">
//                                 Image : <FaRegFileImage className="icon" />
//                             </label>
//                             <input
//                                 type="file"
//                                 id="image"
//                                 name="image"
//                                 onChange={handleChange}
//                                 style={{ display: "none" }}
//                             // required
//                             />
//                         </div>
//                         <div className='btn__update__profile'>
//                             <button type="submit" className="submit-button">Enregistrer</button>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default UserPage;






















































import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './userpage.scss';
import { useGetUserById } from '../../services/serviceUser';
import { useUpdateUser } from '../../services/serviceUser';
import { FaArrowLeft } from 'react-icons/fa';
import { FaRegFileImage } from 'react-icons/fa';
import { useSnackbar } from 'notistack';
import { AiOutlineClose } from 'react-icons/ai';
import IconButton from '@mui/material/IconButton';

const UserPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userId = location.state?.userId;
    const { mutate: updateUser } = useUpdateUser();
    const { enqueueSnackbar } = useSnackbar();

    const { data: userData, error, isLoading } = useGetUserById(userId);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        image: null
    });

    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        if (userData && userData.data) {
            setFormData({
                name: userData.data.name || '',
                email: userData.data.email || '',
                image: userData.data.image || null // Conservez l'image si elle existe
            });

            setImagePreview(userData.data.image); // Prévisualisation de l'image actuelle
            console.log("image from input", userData.data.image); // Prévisualisation de l'image actuelle
            // const fory =  userData.data.image;
            // console.log('image from input',fory); // Prévisualisation de l'image actuelle
        }
    }, [userData]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData({ ...formData, image: files[0] });
            setImagePreview(URL.createObjectURL(files[0])); // Prévisualiser la nouvelle image
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     let updateData = { ...formData };

    //     // Si aucune nouvelle image n'a été sélectionnée, conserver l'ancienne
    //     if (!formData.image) {
    //         updateData.image = userData.data.image; // Garde l'image existante si non modifiée
    //     }

    //     console.log('FormData click:', updateData);
    //     // console.log('Fory click:', fory);
    //     // console.log('photo:', userData.data.image);
    //     console.log('photo:', updateData.image);

    //     try {
    //         // await updateUser({ userId, data: updateData }, {
    //         //     onSuccess: () => {
    //         //         setFormData({ name: '', email: '', image: null });
    //         //         setImagePreview('');
    //         //         navigate('/profile');
    //         //         enqueueSnackbar('Utilisateur mis à jour avec succès', {
    //         //             variant: 'success',
    //         //             anchorOrigin: {
    //         //                 vertical: 'top',
    //         //                 horizontal: 'center',
    //         //             },
    //         //             autoHideDuration: 5000,
    //         //             action: (
    //         //                 <IconButton size="small" onClick={() => { }}>
    //         //                     <AiOutlineClose fontSize="small" />
    //         //                 </IconButton>
    //         //             ),
    //         //             style: {
    //         //                 backgroundColor: '#4caf50',
    //         //                 color: '#ffffff',
    //         //             },
    //         //         });
    //         //     },
    //         //     onError: (error) => {
    //         //         console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
    //         //         enqueueSnackbar('Erreur lors de la mise à jour du profil', {
    //         //             variant: 'error',
    //         //             anchorOrigin: {
    //         //                 vertical: 'top',
    //         //                 horizontal: 'center',
    //         //             },
    //         //             autoHideDuration: 5000,
    //         //         });
    //         //     }
    //         // });
    //     } catch (error) {
    //         console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
    //         enqueueSnackbar('Erreur lors de la mise à jour du profil', {
    //             variant: 'error',
    //             anchorOrigin: {
    //                 vertical: 'top',
    //                 horizontal: 'center',
    //             },
    //             autoHideDuration: 5000,
    //         });
    //     }
    // };

















    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let updateData = { ...formData };
    
        // Si aucune nouvelle image n'a été sélectionnée, conserver l'ancienne
        if (!formData.image) {
            // Supprimer l'URL complète de l'image si elle existe
            let imageName = userData.data.image;
            if (imageName && imageName.includes('http://127.0.0.1:9876/uploads/')) {
                imageName = imageName.replace('http://127.0.0.1:9876/uploads/', '');
            }
            updateData.image = imageName; // Utilisez uniquement le nom de l'image
        }
    
        console.log('FormData click:', updateData);
        console.log('photo11111111111:', updateData.image);
    
        try {
            // Lancer la mise à jour de l'utilisateur ici
            await updateUser({ userId, data: updateData }, {
                onSuccess: () => {
                    setFormData({ name: '', email: '', image: null });
                    setImagePreview('');
                    navigate('/profile');
                    enqueueSnackbar('Utilisateur mis à jour avec succès', {
                        variant: 'success',
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center',
                        },
                        autoHideDuration: 5000,
                        action: (
                            <IconButton size="small" onClick={() => { }}>
                                <AiOutlineClose fontSize="small" />
                            </IconButton>
                        ),
                        style: {
                            backgroundColor: '#4caf50',
                            color: '#ffffff',
                        },
                    });
                },
                onError: (error) => {
                    console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
                    enqueueSnackbar('Erreur lors de la mise à jour du profil', {
                        variant: 'error',
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center',
                        },
                        autoHideDuration: 5000,
                    });
                }
            });
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
            enqueueSnackbar('Erreur lors de la mise à jour du profil', {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
                autoHideDuration: 5000,
            });
        }
    };

    





    const handleBackClick = () => {
        navigate('/profile');
    };

    return (
        <div className='container__users'>
            <div className='content__headers'>
                <div className='icon__back'>
                    <FaArrowLeft
                        className='back__icon'
                        onClick={handleBackClick}
                        size={44}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className='title__profile'>
                    <span>Modification du profile</span>
                </div>
                {userId ? (
                    <div className='id__import'>
                        <p>ID Utilisateur: {userId}</p>
                    </div>
                ) : (
                    <p>ID utilisateur non trouvé.</p>
                )}
                {isLoading && <p>Chargement des données...</p>}
                {error && <p>Erreur lors de la récupération des données utilisateur: {error.message}</p>}
            </div>

            <form onSubmit={handleSubmit} className="user-form" encType="multipart/form-data">
                <div className='container__form'>
                    <div className='image___recive'>
                        {imagePreview && <img src={imagePreview} alt="Prévisualisation" className="image-preview" />} {/* Affiche l'image prévisualisée */}
                    </div>
                    <div className='content__form'>
                        <div className="form-group">
                            <label htmlFor="name">Nom:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nom d'utilisateur"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Adresse email'
                                required
                            />
                        </div>
                        <div className="form-group content__input">
                            <label htmlFor="image">
                                Image : <FaRegFileImage className="icon" />
                            </label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={handleChange}
                                style={{ display: "none" }}
                            />
                        </div>
                        <div className='btn__update__profile'>
                            <button type="submit" className="submit-button">Enregistrer</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserPage;


























        // const formData = new FormData();

        // if (formData.image) {
        //     formData.append('image', formData.image);
        // } else {
        //     formData.append('image', userData.data.image);
        // }
    
        // formData.append('name', formData.name);
        // formData.append('email', formData.email);


























    // const handleSubmits = (e) => {
    //     e.preventDefault();
    
    //     // Créer un objet FormData pour gérer le téléchargement de fichiers
    //     const updatedFormData = new FormData();
    
    //     // Ajouter les champs 'name' et 'email'
    //     // updatedFormData.append('name', formData.name);
    //     // updatedFormData.append('email', formData.email);
    
    //     // Ajouter la nouvelle image uniquement si elle est sélectionnée, sinon garder l'ancienne
    //     if (formData.image) {
    //         updatedFormData.append('image', formData.image); // Nouvelle image
    //     } else {
    //         updatedFormData.append('image', userData.data.image); // Garder l'ancienne image
    //     }
    
    //     // Envoyer les données à l'API pour la mise à jour
    //     updateUser({ userId, data: updatedFormData }, {
    //         onSuccess: () => {
    //             setFormData({ name: '', email: '', image: null });
    //             setImagePreview('');
    //             navigate('/profile');
    //             enqueueSnackbar('Utilisateur mis à jour avec succès', {
    //                 variant: 'success',
    //                 anchorOrigin: {
    //                     vertical: 'top',
    //                     horizontal: 'center',
    //                 },
    //                 autoHideDuration: 5000,
    //                 action: (
    //                     <IconButton size="small" onClick={() => { }}>
    //                         <AiOutlineClose fontSize="small" />
    //                     </IconButton>
    //                 ),
    //                 style: {
    //                     backgroundColor: '#4caf50',
    //                     color: '#ffffff',
    //                 },
    //             });
    //         },
    //         onError: (error) => {
    //             console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
    //         }
    //     });
    // };
    
















































// const UserPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const userId = location.state?.userId;
//     const { mutate: updateUser } = useUpdateUser();
//     const { enqueueSnackbar } = useSnackbar();

//     const { data: userData, error, isLoading } = useGetUserById(userId);
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         image: null
//     });
//     const [imagePreview, setImagePreview] = useState('');
//     const [hasImageChanged, setHasImageChanged] = useState(false);

//     useEffect(() => {
//         if (userData && userData.data) {
//             setFormData({
//                 name: userData.data.name || '',
//                 email: userData.data.email || '',
//                 image: userData.data.image ? userData.data.image : null
//             });

//             setImagePreview(userData.data.image || '');
//             setHasImageChanged(false);
//         }
//     }, [userData]);

//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         if (name === 'image') {
//             setFormData({ ...formData, [name]: files[0] });
//             setImagePreview(URL.createObjectURL(files[0]));
//             setHasImageChanged(true);
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         updateUser({ userId, data: formData }, {
//             onSuccess: () => {
//                 setFormData({ name: '', email: '', image: null });
//                 setImagePreview('');
//                 setHasImageChanged(false);
//                 navigate('/profile');
//                 enqueueSnackbar('Utilisateur mis à jour avec succès', {
//                     variant: 'success',
//                     anchorOrigin: {
//                         vertical: 'top',
//                         horizontal: 'center',
//                     },
//                     autoHideDuration: 5000,
//                     action: (
//                         <IconButton size="small" onClick={() => { }}>
//                             <AiOutlineClose fontSize="small" />  
//                         </IconButton>
//                     ),
//                     style: {
//                         backgroundColor: '#4caf50',
//                         color: '#ffffff',
//                     },
//                 });
//             },
//             onError: (error) => {
//                 console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
//             }
//         });
//     };



    


































