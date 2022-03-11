import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { checkEmailExist, register, login } from "@/api/_authenticationApi";
import { useNotification } from "@/notifications/NotificationProvider";

import { VscRefresh } from 'react-icons/vsc'

const Login = () => {

    const [email, setEmail] = useState('');
    const [emailIsKnown, setEmailIsKnown] = useState(null);
    const [emailLoading, setEmailLoading] = useState(false)

    const [username, setUsername] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    
    const [loginLoading, setLoginLoading] = useState(false)
    const [registerLoading, setRegisterLoading] = useState(false)

    // Notification
	const dispatch = useNotification();
    
    const navigate = useNavigate();

	const handleNotification = (type, message, title) => {
		dispatch({
		  type: type,
		  message: message,
		  title: title
		})
	}

    // Validation du mail
    const handleMailValidation = async (e) => {
        e.preventDefault();
        setEmailLoading(true)
        await checkEmailExist(email)
            .then(() => {
                setEmailIsKnown(false);
            }).catch(() => {
                setEmailIsKnown(true);
            })
        setEmailLoading(false)
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginLoading(true)
        await login(email, password)
            .then((response) => {
                handleNotification("success", "Vous êtes désormais connecté !",  "Connexion");
                navigate('/passport');
            })
            .catch((error) => {
                handleNotification("error", "Identifiants incorrects",  "Connexion");
                console.log(error)
            })
        setLoginLoading(false)
    }

    const handleRegistration = async (e) => {
        e.preventDefault();
        setRegisterLoading(true)
        await register(email, newPassword, username, birthdate)
            .then(async (response) => {
                console.log(response)
                await login(email, newPassword)
                    .then((response) => {
                        handleNotification("success", "Vous êtes désormais connecté !",  "Connexion");
                        navigate('/passport');
                    })
            })
            .catch((error) => {
                console.log(error)
            })
        setRegisterLoading(false)
    }

    return (
        <div className={"page-content bg-beige"}>
            <div id="bloc-mail" className="pt-5 pb-3">
                <div className="title-container">
                    <h1 className='h1'>Bienvenue à bord</h1>
                </div>
            </div>
            <main className="w-full bg-beige account-sign-container mx-auto">
                {!emailIsKnown && emailIsKnown !== false &&
                    <div className="mb-10 mx-auto container">
                        <form onSubmit={(e) => handleMailValidation(e)}>
                            <div className={"mb-4 grid grid-cols-9 gap-4"}>
                                <div className={"form-field col-span-7 col-start-2"}>
                                    <label id={"email"}>Adresse mail</label>
                                    <input
                                        type={"email"}
                                        name={"email"}
                                        value={email}
                                        required
                                        className={"focus:border-dark-brown focus:ring-dark-brown"}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={"btn-loading mx-auto"}>
                                <button className={"btn btn-dark mx-auto my-5"} type={"submit"}>
                                    <span className={"btn-text"}>S'identifier avec un mail</span>
                                </button>
                                {emailLoading &&
                                    <div className={"btn-overlay"}>
                                        <VscRefresh className={"animate-spin"} />
                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                }

                {emailIsKnown === true &&
                    <div id="bloc-login" className="mb-10">
                        <form onSubmit={(e) => handleLogin(e)}>
                            <div className={"mb-4 grid grid-cols-9 gap-4"}>
                                <div className={"form-field col-span-7 col-start-2"}>
                                    <label>Adresse mail</label>
                                    <input
                                        type={"email"}
                                        name={"email"}
                                        value={email}
                                        required
                                        className={"focus:border-dark-brown focus:ring-dark-brown"}
                                        readOnly="readonly"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={"grid grid-cols-9 gap-4"}>
                                <div className={"form-field col-span-7 col-start-2"}>
                                    <label>Mot de passe</label>
                                    <input
                                        type={"password"}
                                        name={"password"}
                                        value={password}
                                        min={8}
                                        required
                                        className={"focus:border-dark-brown focus:ring-dark-brown"}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <Link to={"/"} className="text-right nav-link col-span-7 col-start-2">
                                    <p className={"forgot-password-link"}>J'ai oublié mon mot de passe</p>
                                </Link>
                            </div>
                            <div className={"btn-loading mx-auto"}>
                                <button className={"btn btn-dark mx-auto my-5"} type={"submit"}>
                                    <span className={"btn-text"}>Se connecter</span>
                                </button>
                                {loginLoading &&
                                    <div className={"btn-overlay"}>
                                        <VscRefresh className={"animate-spin"} />
                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                }

                {emailIsKnown === false &&
                    <div id="bloc-registration" className="mb-10">
                        <form onSubmit={(e) => handleRegistration(e)}>
                            <div className={"mb-4 grid grid-cols-9 gap-4"}>
                                <div className={"form-field col-span-7 col-start-2"}>
                                    <label>Adresse mail</label>
                                    <input
                                        type={"email"}
                                        name={"email"}
                                        value={email}
                                        required
                                        className={"focus:border-dark-brown focus:ring-dark-brown"}
                                        readOnly="readonly"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={"mb-4 grid grid-cols-9 gap-4"}>
                                <div className={"form-field col-span-7 col-start-2"}>
                                    <label>Pseudonyme</label>
                                    <input
                                        type={"text"}
                                        name={"username"}
                                        value={username}
                                        className={"focus:border-dark-brown focus:ring-dark-brown"}
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={"mb-4 grid grid-cols-9 gap-4"}>
                                <div className={"form-field col-span-7 col-start-2"}>
                                    <label>Date de naissance</label>
                                    <input
                                        type={"date"}
                                        name={"birthdate"}
                                        value={birthdate}
                                        className={"focus:border-dark-brown focus:ring-dark-brown"}
                                        onChange={e => setBirthdate(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={"mb-4 grid grid-cols-9 gap-4"}>
                                <div className={"form-field col-span-7 col-start-2"}>
                                    <label>Mot de passe</label>
                                    <input
                                        type={"password"}
                                        name={"password"}
                                        value={newPassword}
                                        min={8}
                                        required
                                        className={"focus:border-dark-brown focus:ring-dark-brown"}
                                        onChange={e => setNewPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={"btn-loading mx-auto"}>
                                <button className={"btn btn-dark mx-auto my-5"} type={"submit"}>
                                    <span className={"btn-text"}>S'inscrire</span>
                                </button>
                                {registerLoading &&
                                    <div className={"btn-overlay"}>
                                        <VscRefresh className={"animate-spin"} />
                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                }
            </main>
        </div>
    );
}

export default Login;