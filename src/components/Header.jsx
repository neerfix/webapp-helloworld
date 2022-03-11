import React, {useEffect, useState} from 'react';
import { NavLink, useNavigate } from "react-router-dom";

import { logout } from '@/api/_authenticationApi';
import { useNotification } from "@/notifications/NotificationProvider";

// Logo
import { ReactComponent as Logo } from "@/assets/images/logo.svg";
import { VscSignOut } from 'react-icons/vsc'

const Header = () => {
	const navigate = useNavigate();
	const authentication = JSON.parse(localStorage.getItem('authentication'))
	
	const [isLogged, setIsLogged] = useState(false)
	
	useEffect(() => {
		setIsLogged(!!authentication)
	}, [authentication])

    // Notification
	const dispatch = useNotification();

	const handleNotification = (type, message, title) => {
		dispatch({
		  type: type,
		  message: message,
		  title: title
		})
	}
	
	const disconnection = async () => {
		await logout();
		handleNotification("success", "Vous êtes désormais déconnecté",  "Déconnexion");
		navigate('/')
	}
	
	return (
		<div id="header-container">
			<div id="header">
				<nav className="bg-teal flex flex-wrap items-center justify-between p-6">
					<div className="flex-no-shrink mr-6 flex items-center text-white">
						<NavLink to={"/"}>
							<Logo className={"logo"} />
						</NavLink>
					</div>
					<div className="flex w-full w-auto flex-grow items-center justify-end">
						<NavLink to={"map"} className={"nav-link"}>
							Carte
						</NavLink>
						<span className="separator">◆</span>
						{isLogged &&
							<>
								<NavLink to={"feed"} className={"nav-link"}>
									Fil d'actu
								</NavLink>
								<span className="separator">◆</span>
								<NavLink to={"passport"} className={"nav-link"}>
									Passeport
								</NavLink>
								<span className="separator">◆</span>
								<button className={"nav-btn"} onClick={disconnection}>
									<VscSignOut className={"text-xl"} />
								</button>
							</>
						}
						{!isLogged &&
							<NavLink to={"login"} className={"nav-btn"}>
								<span className="hidden visible-lg mx-2 w-full">Connexion / Inscription</span>
								<span className="hidden-lg mx-2 w-full">Compte</span>
							</NavLink>
						}
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Header;