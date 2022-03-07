import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    // fixme : get real users and check real emails in database
    const usersToCheck = [
        { pseudo: "", email: "john.doe@example.xyz", phoneNumber: "", password: "12345678" },
        { pseudo: "", email: "jane.doe@example.xyz", phoneNumber: "06 31 25 65 28", password: "12345678" }
    ];

    const [email, setEmail] = useState('');
    const [emailIsKnown, setEmailIsKnown] = useState(null);

    const [pseudo, setPseudo] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleFacebook = (e) => {
        e.preventDefault();
        alert("Facebook authentication");
    }

    const handleMailValidation = (e) => {
        e.preventDefault();
        const user = usersToCheck.find(u => u.email === email);
        console.log(user);
        if (user) {
            setEmailIsKnown(true);
        } else {
            setEmailIsKnown(false);
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        
        const userPwd = usersToCheck.find(u => u.password === password)
        if (userPwd) {
            alert("logged");
        } else {
            alert("wrong password");
        }
    }

    const handleRegistration = (e) => {
        e.preventDefault();

        if (usersToCheck.find(u => u.email === email || u.phoneNumber === phoneNumber || u.pseudo === pseudo)) {
            alert("already exists");
            return;
        }

        const user = {
            pseudo: pseudo,
            email: email,
            phoneNumber: phoneNumber,
            password: newPassword
        }

        usersToCheck.push(user);
        alert("registered")
    }

    return (
        <div id={"login"} className={"mx-auto hx-auto"}>
            <div className="compass"></div>
            <main className="w-full bg-beige">
                <div id="bloc-mail" className="my-10 py-10">
                    <div className="title-container">
                        <h2>Bienvenue à bord</h2>
                    </div>
                    <form onSubmit={(e) => handleFacebook(e)}>
                        <button className={"btn btn-dark mx-auto my-5"} type={"submit"}>
                            <span className={"btn-text"}>S'identifier avec facebook</span>
                        </button>
                    </form>

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

                        <button className={"btn btn-dark mx-auto my-5"} type={"submit"}>
                            <span className={"btn-text"}>S'identifier avec un mail</span>
                        </button>
                    </form>
                </div>

                {emailIsKnown === null &&
                    <h1>empty</h1>
                }

                {emailIsKnown === true &&
                    <div id="bloc-login" className="my-10 py-10">
                        <div className="title-container">
                            <h2>Connectez-vous</h2>
                        </div>
                        <form onSubmit={(e) => handleLogin(e)}>
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
                                        name={"pseudo"}
                                        value={pseudo}
                                        className={"focus:border-dark-brown focus:ring-dark-brown"}
                                        onChange={e => setPseudo(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={"mb-4 grid grid-cols-9 gap-4"}>
                                <div className={"form-field col-span-7 col-start-2"}>
                                    <label>Numéro de téléphone</label>
                                    <input
                                        type={"text"}
                                        name={"phone"}
                                        value={phoneNumber}
                                        className={"focus:border-dark-brown focus:ring-dark-brown"}
                                        onChange={e => setPhoneNumber(e.target.value)}
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