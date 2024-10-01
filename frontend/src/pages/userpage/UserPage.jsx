
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './userpage.scss'; // Assurez-vous d'avoir un fichier CSS pour le style
import { useGetUserById } from '../../services/serviceUser'; // Ajuste le chemin en fonction de l'emplacement de ton fichier
import { useUpdateUser } from '../../services/serviceUser'; // Ajuste le chemin si nécessaire
import { FaArrowLeft } from 'react-icons/fa';

const UserPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userId = location.state?.userId;
    const { mutate: updateUser } = useUpdateUser();

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

            // console.log('Données du formulaire:', userData.data);
            console.log('Données du formulairelll:', userData.data.image);
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
                console.log('Utilisateur mis à jour avec succès');
                setFormData({ name: '', email: '', image: null });
                setImagePreview('');
                navigate('/profile');
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
            <div>
                <h1>User Page</h1>
                <div className='icon__back'>
                    <FaArrowLeft
                        className='back-icon'
                        onClick={handleBackClick}
                        size={44}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
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
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        // required
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
