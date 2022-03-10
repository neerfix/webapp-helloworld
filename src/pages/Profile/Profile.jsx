import {NavLink} from "react-router-dom";
import {FiEdit3} from "react-icons/fi";
import banner from "@/assets/images/homepage/hero-banner.jpg";
import PassportInformation from "@/pages/Passport/components/PassportInformation";
import {useEffect, useState} from "react";

import { useParams } from "react-router-dom";

const ProfilePage = (props) => {
	const params = useParams()
	
	const [loading, setLoading] = useState(true)
	const [profile, setProfile] = useState({
		username: 'Oui',
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
		console.log(params.uuid)
	}, [params])
	
	return (
		<div id={"passport"} className={"mx-auto bg-white"}>
			<div className="compass"/>
			<div className={"w-full"}>
				<div className="title-container">
					<div className={"flex w-full items-center justify-between pr-8"}>
						<h2 className="h2">{profile.username}</h2>
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
							<span className={"btn-text"}>Ajouter en amis</span>
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
}

export default ProfilePage