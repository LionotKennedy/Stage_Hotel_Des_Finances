// import React from 'react'

// const UserPage = () => {
//   return (
//     <div>UserPage</div>
//   )
// }

// export default UserPage













// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const UserPage = () => {
//     const location = useLocation();
//     const userId = location.state?.userId; // Récupérer l'ID utilisateur depuis l'état

//     return (
//         <div className='container__users'>

//             <div>
//                 <h1>User Page</h1>
//                 {userId ? (
//                     <p>ID Utilisateur: {userId}</p> // Afficher l'ID utilisateur
//                 ) : (
//                     <p>ID utilisateur non trouvé.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default UserPage;

































      // <div className='container__users'>
        //     <div>
        //         <h1>User Page</h1>
        //         {userId ? (
        //             <p>ID Utilisateur: {userId}</p> // Afficher l'ID utilisateur
        //         ) : (
        //             <p>ID utilisateur non trouvé.</p>
        //         )}
        //     </div>
            
        //     <form onSubmit={handleSubmit} className="user-form" encType="multipart/form-data">
        //         <div className="form-group">
        //             <label htmlFor="name">Nom:</label>
        //             <input
        //                 type="text"
        //                 id="name"
        //                 name="name"
        //                 value={formData.name}
        //                 onChange={handleChange}
        //                 required
        //             />
        //         </div>
        //         <div className="form-group">
        //             <label htmlFor="email">Email:</label>
        //             <input
        //                 type="email"
        //                 id="email"
        //                 name="email"
        //                 value={formData.email}
        //                 onChange={handleChange}
        //                 required
        //             />
        //         </div>
        //         <div className="form-group">
        //             <label htmlFor="password">Mot de passe:</label>
        //             <input
        //                 type="password"
        //                 id="password"
        //                 name="password"
        //                 value={formData.password}
        //                 onChange={handleChange}
        //                 required
        //             />
        //         </div>
        //         <div className="form-group">
        //             <label htmlFor="image">Image:</label>
        //             <input
        //                 type="file"
        //                 id="image"
        //                 name="image"
        //                 value={formData.image}
        //                 onChange={handleChange}
        //                 required
        //             />
        //         </div>
        //         <button type="submit" className="submit-button">Envoyer</button>
        //     </form>
        // </div>



































// import React, { useState,useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import './userpage.scss'; // Assurez-vous d'avoir un fichier CSS pour le style
// import { useGetUserById } from '../../services/serviceUser'; // Ajuste le chemin en fonction de l'emplacement de ton fichier

// const UserPage = () => {
//     const location = useLocation();
//     const userId = location.state?.userId; // Récupérer l'ID utilisateur depuis l'état

//     const { data: userData, error, isLoading } = useGetUserById(userId); // Récupérer les données utilisateur
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         image: ''
//     });

//     useEffect(() => {
//         if (userData) {
//             console.log('Données de l\'utilisateur récupérées:', userData); // Affiche les données dans la console
//             setFormData({
//                 name: userData.name || '',
//                 email: userData.email || '',
//                 password: '', // Ne pas pré-remplir le mot de passe pour des raisons de sécurité
//                 image: userData.image || '' // Ajuste ceci si l'image est un URL
//             });
//         }
//     }, [userData]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value }); // Mettre à jour les données du formulaire
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Ici, tu peux gérer l'envoi des données du formulaire (par exemple, à une API)
//         console.log('Données du formulaire:', formData);
//         // Réinitialiser le formulaire après l'envoi
//         setFormData({ name: '', email: '', password: '', image: '' });
//     };

//     return (

//         <div className='container__users'>
//         <div>
//             <h1>User Page</h1>
//             {userId ? (
//                 <p>ID Utilisateur: {userId}</p> // Afficher l'ID utilisateur
//             ) : (
//                 <p>ID utilisateur non trouvé.</p>
//             )}
//             {isLoading && <p>Chargement des données...</p>}
//             {error && <p>Erreur lors de la récupération des données utilisateur: {error.message}</p>}
//         </div>
        
//         <form onSubmit={handleSubmit} className="user-form" encType="multipart/form-data">
//             <div className="form-group">
//                 <label htmlFor="name">Nom:</label>
//                 <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="password">Mot de passe:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="image">Image:</label>
//                 <input
//                     type="file"
//                     id="image"
//                     name="image"
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <button type="submit" className="submit-button">Envoyer</button>
//         </form>
//     </div>

//     );
// }

// export default UserPage;






































import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './userpage.scss'; // Assurez-vous d'avoir un fichier CSS pour le style
import { useGetUserById } from '../../services/serviceUser'; // Ajuste le chemin en fonction de l'emplacement de ton fichier
import { useUpdateUser } from '../../services/serviceUser'; // Ajuste le chemin si nécessaire

const UserPage = () => {
    const location = useLocation();
    const userId = location.state?.userId; // Récupérer l'ID utilisateur depuis l'état
    const { mutate: updateUser } = useUpdateUser(); // Utilisation du hook pour la mise à jour

    const { data: userData, error, isLoading } = useGetUserById(userId); // Récupérer les données utilisateur
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        // password: '',
        image: null // Changer à null pour gérer le fichier
    });
    const [imagePreview, setImagePreview] = useState(''); // État pour prévisualiser l'image

    // useEffect(() => {
    //     if (userData && userData.data) {
    //         console.log('Données de l\'utilisateur récupérées:', userData); // Affiche les données dans la console
    //         setFormData({
    //             name: userData.data.name || '',
    //             email: userData.data.email || '',
    //             password: '', // Ne pas pré-remplir le mot de passe pour des raisons de sécurité
    //             image: null // Mettre à null pour l'input type file
    //         });
    //         setImagePreview(`${userData.data.image}`); // Mettre à jour la prévisualisation de l'image
    //         console.log('Données de l\'utilisateur récupérées:', userData.data.name); // Affiche les données dans la console
    //         console.log('Données de l\'utilisateur récupérées:', `${userData.data.image}`); // Affiche les données dans la console
    //     }
    // }, [userData]);

    // const handleChange = (e) => {
    //     // const { name, value, files } = e.target;
    //     // if (name === 'image') {
    //     //     setFormData({ ...formData, [name]: files[0] }); // Gérer le fichier d'image
    //     // } else {
    //     //     setFormData({ ...formData, [name]: value }); // Mettre à jour les données du formulaire
    //     // }

    //     const { name, value, files } = e.target;
    //     if (name === 'image') {
    //         setFormData({ ...formData, [name]: files[0] }); // Gérer le fichier d'image
    //         setImagePreview(URL.createObjectURL(files[0])); // Prévisualiser l'image sélectionnée
    //     } else {
    //         setFormData({ ...formData, [name]: value }); // Mettre à jour les données du formulaire
    //     }
    // };

    // const handleSubmit = (e) => {
    //     // e.preventDefault();
    //     // // Ici, tu peux gérer l'envoi des données du formulaire (par exemple, à une API)
    //     // console.log('Données du formulaire:', formData);
    //     // // Réinitialiser le formulaire après l'envoi
    //     // setFormData({ name: '', email: '', password: '', image: null });

    //     e.preventDefault();
    //     // Ici, tu peux gérer l'envoi des données du formulaire (par exemple, à une API)
    //     console.log('Données du formulaire:', formData);
    //     // Réinitialiser le formulaire après l'envoi
    //     setFormData({ name: '', email: '', password: '', image: null });
    //     setImagePreview(''); // Réinitialiser la prévisualisation de l'image
    // };

    useEffect(() => {
        if (userData && userData.data) {
            setFormData({
                name: userData.data.name || '',
                email: userData.data.email || '',
                // password: '',
                image: null
            });
            setImagePreview(`${userData.data.image}`);
        }
    }, [userData]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData({ ...formData, [name]: files[0] });
            setImagePreview(URL.createObjectURL(files[0]));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Appel de la fonction de mise à jour
        updateUser({ userId, data: formData }, {
            onSuccess: () => {
                console.log('Utilisateur mis à jour avec succès');
                // Réinitialiser le formulaire après l'envoi
                setFormData({ name: '', email: '', image: null });
                setImagePreview('');
            },
            onError: (error) => {
                console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
            }
        });
    };

    return (
        <div className='container__users'>
            <div>
                <h1>User Page</h1>
                {userId ? (
                    <p>ID Utilisateur: {userId}</p> // Afficher l'ID utilisateur
                ) : (
                    <p>ID utilisateur non trouvé.</p>
                )}
                {isLoading && <p>Chargement des données...</p>}
                {error && <p>Erreur lors de la récupération des données utilisateur: {error.message}</p>}
            </div>

            <form onSubmit={handleSubmit} className="user-form" encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="name">Nom:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        required
                    />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="password">Mot de passe:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div> */}
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        required
                    />
                      {imagePreview && <img src={imagePreview} alt="Prévisualisation" className="image-preview" />} {/* Affiche l'image prévisualisée */}
                </div>
                {/* <button type="submit" className="submit-button">Envoyer</button> */}
                <button type="submit" className="submit-button">Envoyer</button>
            </form>
        </div>
    );
}

export default UserPage;
