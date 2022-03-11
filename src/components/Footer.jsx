import React from "react";
import { NavLink } from "react-router-dom";

import { FaGithub } from "react-icons/fa";

import { ReactComponent as Logo } from "@/assets/images/logo.svg";

class Footer extends React.Component {
	render() {
		return (
			<div className={"footer border-t-2 border-beige bg-white pt-4 pb-2"}>
				<div className={"footer-content mb-2 flex flex-col lg:flex-row items-center"}>
					<div className={"flex w-full lg:w-1/3 justify-center"}>
						<div className={"flex items-center space-x-2"}>
							<Logo className={"logo"} />
							<div className={"text-4xl font-semibold leading-7"}>
								<span>Hello</span>
								<span>World</span>
							</div>
						</div>
					</div>
					<div className={"w-full lg:w-1/3 my-5 justify-center px-4"}>
						<div className="m-r5">
							<p>
								Grâce à HelloWorld, votre carnet de voyage en ligne, vous pouvez mettre en avant vos meilleurs voyages, étapes par étapes et avec photos.
								Rejoignez la communauté de voyageurs et inspirez les autres&nbsp;!
							</p>
						</div>
						<div className={"d-block mt-3"}>
							<p>
								Retrouvez tous les voyages sur la&nbsp;
								<NavLink
									to={"map"}
									className={"nav-link font-semibold underline"}
								>
									carte interactive.
								</NavLink>
							</p>
							<p>
								Si vous ne possédez pas de compte, vous pouvez dès à présent&nbsp;
								<NavLink
									to={"login"}
									className={"nav-link font-semibold underline"}
								>
									vous inscrire.
								</NavLink>
							</p>
						</div>
					</div>
					<div className={"w-full lg:w-1/3 justify-center px-4"}>
						<div className="m-5 text-sm">
							<ol>
								<li className="flex items-center">
									<span className={"mr-2 text-brown"}>
										⬩ Gregg SANCHEZ
									</span>
									<a href="https://github.com/Arty3P" className={"text-sm"}>
										<FaGithub />
									</a>
								</li>
								<li className="flex items-center">
									<span className={"mr-2 text-brown"}>
										⬩ Romain FRECHET
									</span>
									<a href="https://github.com/Hikari-rom" className={"text-sm"}>
										<FaGithub />
									</a>
								</li>
								<li className="flex items-center">
									<span className={"mr-2 text-brown"}>
										⬩ Emeline PAL
									</span>
									<a href="https://github.com/emelinepal" className={"text-sm"}>
										<FaGithub />
									</a>
								</li>
								<li className="flex items-center">
									<span className={"mr-2 text-brown"}>
										⬩ Nicolas NOTARARIGO
									</span>
									<a href="https://github.com/Neerfix" className={"text-sm"}>
										<FaGithub />
									</a>
								</li>
								<li className="flex items-center">
									<span className={"mr-2 text-brown"}>
										⬩ Aimee RITLENG
									</span>
									<a href="https://github.com/Aimee-RTLNG" className={"text-sm"}>
										<FaGithub />
									</a>
								</li>
								<li className="flex items-center">
									<span className={"mr-2 text-brown"}>
										⬩ Louise BAULAN
									</span>
									<a href="https://github.com/Fayaah" className={"text-sm"}>
										<FaGithub />
									</a>
								</li>
								<li className="flex items-center">
									<span className={"mr-2 text-brown"}>
										⬩ Matisse LIVAIN
									</span>
									<a href="https://github.com/MLivain" className={"text-sm"}>
										<FaGithub />
									</a>
								</li>
							</ol>
						</div>
					</div>
				</div>
				<div className={"footer-bottom flex flew-wrap items-center justify-between py-4"}>
					<h4 className={"text-sm"}>© Hello World 2022-2023</h4>
					<a href="https://github.com/helloworld-ynovlyon/" className={"hidden sm:flex text-sm flex items-center mr-10 pr-4"}>
						<span className={"mr-2"}>SOURCE</span>
						<FaGithub />
					</a>
				</div>
			</div>
		);
	}
}

export default Footer;
