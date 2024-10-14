
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './userpage.scss'; // Assurez-vous d'avoir un fichier CSS pour le style
import { useGetUserById } from '../../services/serviceUser'; // Ajuste le chemin en fonction de l'emplacement de ton fichier
import { useUpdateUser } from '../../services/serviceUser'; // Ajuste le chemin si nécessaire
import { FaArrowLeft } from 'react-icons/fa';
import { FaFileImage, FaImages, FaImage, FaRegFileImage } from 'react-icons/fa';
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
                image: null
            });

            setImagePreview(userData.data.image);
            // console.log('Données du formulairelll:', userData.data.image);
            // console.log('Données du formulaireccc:', imagePreview);
            // console.log('Données du formulaireccc:', imagePath);
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

        updateUser({ userId, data: formData }, {
            onSuccess: () => {
                // console.log('Utilisateur mis à jour avec succès');
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
                            <AiOutlineClose fontSize="small" />  {/* Utilisation de AiOutlineClose ici */}
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
            }
        });

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
                            // required
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
