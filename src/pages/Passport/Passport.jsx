
import { useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

import { FiEdit3 } from "react-icons/fi";

import banner from "@/assets/images/homepage/hero-banner.jpg";
import PassportInformation from "@/pages/Passport/components/PassportInformation";

import { getProfileInformation } from "@/api/_passportApi";

const PassportPage = () => {
	const [loading, setLoading] = useState(true)
	const [profile, setProfile] = useState({
		description: 'Bonjour je suis Emelicorne, j’aime les randonnées et les patates ! Nice to meet you',
		album: [
			"https://jesuispartievoyager.com/wp-content/uploads/2018/03/animaux-traversant-route-afrique-sud-4.jpg",
			"https://www.andbeyond.com/wp-content/uploads/sites/5/gorah-elephant-camp-south-africa-view-elephantss-waterholes.jpg",
			"https://www.nationsonline.org/gallery/South-Africa/Twelve-Apostles-Oudekraal.jpg",
			"https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800",
			"https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800",
			"https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800"
		],
		statistics: {
			countries: 10,
			cities: 43,
			days: 50
		}
	})
	
	useEffect(() => {
		async function fetchProfileInformation() {
			const { data } = await getProfileInformation()
			console.log(data, loading)
			setLoading(false)
			setProfile(profile)
		}
		
		fetchProfileInformation()
	}, [loading, profile])
	
	return (
		<div id={"passport"} className={"mx-auto bg-white"}>
			<div className="compass"/>
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
			<div className={"bg-beige py-10 px-6"}>
				<div className={"md:mx-auto md:max-w-[500px]"}>
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
						album={profile.album}
						statistics={profile.statistics}
					/>
				</div>
			</div>
		</div>
	);
};

export default PassportPage;
