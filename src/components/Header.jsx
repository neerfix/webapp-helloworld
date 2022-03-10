import React from 'react';

import { ReactComponent as Logo } from "@/assets/images/logo.svg";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
	render() {
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
							<NavLink to={"feed"} className={"nav-link"}>
								Fil d'actu
							</NavLink>
							<span className="separator">◆</span>
							<NavLink to={"passport"} className={"nav-link"}>
								Passeport
							</NavLink>
							<span className="separator">◆</span>
							<NavLink to={"login"} className={"nav-btn"}>
								Connexion / Inscription
							</NavLink>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}

export default Header;