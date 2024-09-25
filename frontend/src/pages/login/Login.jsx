

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdLock } from 'react-icons/md'; 
import { RiUserFill, RiLockFill } from 'react-icons/ri'; 
import { AiOutlineMail } from 'react-icons/ai'; 
import { FaCheckCircle } from 'react-icons/fa'; 
import "./login.scss";
import Loading from '../../components/Loading/Loading';  
import { useLogin } from '../../services/authServices'; // Importer la fonction de login

const Login = ({ onLogin }) => {  
    const [email, setEmail] = useState(''); // Changed setUsername to setEmail
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true); 
    const [forgotPassword, setForgotPassword] = useState(false); 
    const [verificationCode, setVerificationCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState(''); 
    const [emailError, setEmailError] = useState(false); // State to track email error
    const [passwordError, setPasswordError] = useState(false); // State to track password error

    const loginMutation = useLogin(email, password);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 2000);
        
        return () => clearTimeout(timer); 
    }, []);

    const handleLogin = async () => {
        setLoading(true);
        setMessage('');
        setEmailError(false); // Reset error states
        setPasswordError(false); 

        // Validate fields
        if (!email || !password) {
            setMessage('Veuillez remplir tous les champs.');
            if (!email) setEmailError(true);
            if (!password) setPasswordError(true);
            setLoading(false);
            return; // Stop execution if fields are empty
        }

        try {
            const result = await loginMutation.mutateAsync({ email, password });
            console.log('Résultat du login:', result);
    
            if (result.success) {
                localStorage.setItem('token', result.accessToken);
                onLogin(result.data);
            } else {
                setMessage(result.message || 'Connexion échouée. Veuillez vérifier vos identifiants.');
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            setMessage('Une erreur s\'est produite. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    };

    // Reset password handler (remains unchanged)
    const handleResetPassword = () => {
        setMessage('Réinitialisation réussie. Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.');
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='pages__login'>
            <div className="container animate">
                <div className="design">
                    <div className="pill-1 rotate-45"></div>
                    <div className="pill-2 rotate-45"></div>
                    <div className="pill-3 rotate-45"></div>
                    <div className="pill-4 rotate-45"></div>
                </div>
                <div className="login">
                    {forgotPassword === 'verify' ? (
                        <>
                            <FaCheckCircle size={90} className='react__icons' />
                            <h3 className="title">Verify Code</h3>
                            <div className="text-input">
                                <input
                                    type="text"
                                    placeholder="Enter verification code"
                                    value={verificationCode}
                                    onChange={(e) => setVerificationCode(e.target.value)}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="text-input">
                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    autoComplete="off"
                                />
                            </div>
                            <button className="login-btn" onClick={handleResetPassword}>Validate</button>
                            {message && <p className="message">{message}</p>}
                            <a className="forgot text_login" onClick={() => setForgotPassword(false)}>Back to Login</a>
                        </>
                    ) : forgotPassword ? (
                        <>
                            <AiOutlineMail size={90} className='react__icons' />
                            <h3 className="title">Forgot Password</h3>
                            <div className="text-input">
                                <AiOutlineMail className='react__icons' />
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    autoComplete="off"
                                />
                            </div>
                            <button className="login-btn" onClick={() => setForgotPassword('verify')}>Send Reset Link</button>
                            <a className="forgot text_login" onClick={() => setForgotPassword(false)}>Back to Login</a>
                        </>
                    ) : (
                        <>
                            <MdLock size={90} className='react__icons' />
                            <h3 className="title">User Login</h3>
                            <div className="text-input">
                                <RiUserFill className='react__icons' />
                                <input
                                    type="text"
                                    placeholder="Adresse mail"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setEmailError(false); // Clear error on input change
                                    }}
                                    style={{ borderColor: emailError ? 'red' : '' }} // Highlight in red
                                    autoComplete="off"
                                />
                            </div>
                            <div className="text-input">
                                <RiLockFill className='react__icons' />
                                <input
                                    type="password"
                                    placeholder="Mot de passe"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setPasswordError(false); // Clear error on input change
                                    }}
                                    style={{ borderColor: passwordError ? 'red' : '' }} // Highlight in red
                                    autoComplete="off"
                                />
                            </div>
                            <button className="login-btn" onClick={handleLogin}>LOGIN</button>
                            <a className="forgot text_login" onClick={() => setForgotPassword(true)}>Forgot Username/Password?</a>
                            <div className="create">
                                <a className='text_login' href="#">Create Your Account</a>
                                <i className="ri-arrow-right-fill"></i>
                            </div>
                            {message && <p className="error-message">{message}</p>} {/* Error message display */}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
