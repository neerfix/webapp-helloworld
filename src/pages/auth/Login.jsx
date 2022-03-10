import { useState } from "react";
import { Link } from "react-router-dom";

import { checkEmailExist, register, login } from "@/api/_authenticationApi";

import { VscRefresh } from 'react-icons/vsc'

const Login = () => {

    const [email, setEmail] = useState('');
    const [emailIsKnown, setEmailIsKnown] = useState(null);
    const [emailLoading, setEmailLoading] = useState(false)

    const [username, setUsername] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleMailValidation = async (e) => {
        e.preventDefault();
        setEmailLoading(true)
        await checkEmailExist(email)
            .then(() => setEmailIsKnown(false))
            .catch(() => setEmailIsKnown(true))
        setEmailLoading(false)
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(username, password)
            .then((response) => {
                localStorage.setItem('authentication', JSON.stringify(response.data.data))
                //history.push('/passport')
            })
            .catch((error) => console.log(error))
    }

    const handleRegistration = async (e) => {
        e.preventDefault();
        await register(email, newPassword, username, birthdate)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className={"bg-beige"}>
            <div id="bloc-mail" className="py-5">
                <div className="title-container">
                    <h1 className='h1'>Bienvenue à bord</h1>
                </div>
                <div className="mx-auto my-10 container">
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
            </div>
            <main className="w-full bg-beige">
                

                {emailIsKnown === null &&
                    <h1>empty</h1>
                }

                {emailIsKnown === true &&
                    <div id="bloc-login" className="my-10 py-10">
                        <div className="title-container">
                            <h2>Connectez-vous</h2>
                        </div>
                        <form onSubmit={(e) => handleLogin(e)}>
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
                            <div className={"grid grid-cols-9 gap-4"}>
                                <div className={"form-field col-span-7 col-start-2"}>
                                    <label>Mot de passe</label>
                                    <input
                                        type={"password"}
                                        name={"password"}
                                        value={password}
                                        className={"focus:border-dark-brown focus:ring-dark-brown"}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <Link to={"/"}>
                                <p className={"forgot-password-link"}>Mot de passe oublié</p>
                            </Link>
                            <button type={"submit"} className="btn btn-dark mx-auto my-5">
                                <span className="btn-text">Se connecter</span>
                            </button>
                        </form>
                    </div>
                }

                {emailIsKnown === false &&
                    <div id="bloc-registration" className="my-10 py-10">
                        <div className="title-container">
                            <h2>Inscrivez-vous</h2>
                        </div>
                        <form onSubmit={(e) => handleRegistration(e)}>
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
                                        className={"focus:border-dark-brown focus:ring-dark-brown"}
                                        onChange={e => setNewPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button type={"submit"} className="btn btn-dark mx-auto my-5">
                                <span className="btn-text">S'inscrire</span>
                            </button>
                        </form>
                    </div>
                }
            </main>
        </div>
    );
}

export default Login;