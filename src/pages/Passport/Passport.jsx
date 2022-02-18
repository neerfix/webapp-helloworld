
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FiEdit3 } from "react-icons/fi";

import banner from "@/assets/images/homepage/hero-banner.jpg";
import PassportInformation from "@/pages/Passport/components/PassportInformation";

const PassportPage = () => {
	const [profile, setProfile] = useState({
		description: 'Bonjour je suis Emelicorne, j’aime les randonnées et les patates ! Nice to meet you',
	})
	
	return (
		<div id={"passport"} className={"mx-auto bg-white"}>
			<div className="compass"></div>
			<div className={"w-full"}>
				<div className="title-container">
					<div className={"flex w-full items-center justify-between pr-8"}>
						<h2 className="h2">Passeport</h2>
						<NavLink to={"/passport/edit"}>
							<button className={"btn btn-icon btn-outline"}>
								<FiEdit3 />
							</button>
						</NavLink>
					</div>
				</div>
				<div className={"relative min-h-[400px]"}>
					<img
						src={banner}
						alt={"avatar"}
						className={"absolute top-0 left-0 h-full w-full"}
					/>
				</div>
			</div>
			<div className={"bg-beige py-10 px-20"}>
				<div className={"md:mx-auto md:max-w-[400px]"}>
					<div>
						<button className={"btn btn-dark my-5 w-full"}>
							<span className={"btn-text"}>Mes voyages</span>
						</button>
						<button className={"btn btn-outline my-5 w-full"}>
							<span className={"btn-text"}>Ma liste de souhait</span>
						</button>
						<button className={"btn btn-outline my-5 w-full"}>
							<span className={"btn-text"}>Mes compagnons d'aventure</span>
						</button>
					</div>
					<PassportInformation
						description={profile.description}
						album={[]}
						statistics={{
							countries: 10,
							cities: 43,
							days: 50
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default PassportPage;
