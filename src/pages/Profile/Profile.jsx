
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

import { getProfileInformation } from "@/api/_profileApi";
import PassportInformation from "@/pages/Passport/components/PassportInformation";

const ProfilePage = () => {
	const params = useParams()
	
	const [profile, setProfile] = useState({
		username: '',
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
		async function getProfile() {
			const { data } = await getProfileInformation(params.uuid)
			setProfile({
				...profile,
				username: data.username
			})
		}
		
		getProfile()
	}, [params, profile])
	
	return (
		<div id={"passportpage"} className={"bg-white"}>
			
			<div className="voyage-img absolute top-0">
				<img src="https://images.unsplash.com/photo-1574410206732-0000dbcb116d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80" alt="" className="w-full" />
			</div>
			
			<div className="compass"/>
			
			<div className="container mx-auto">
				<div className="passport-card relative rounded-xl shadow bg-white mx-5 pt-5 mb-10">
					
					<div className={"w-full"}>
						<h2 className="text-xl tracking-widest text-brown text-center">◆&nbsp;PASSEPORT&nbsp;◆</h2>
						<div className="title-container pr-5">
							<div className={"flex w-full items-center justify-between pr-3"}>
								<h1 className="h1">{profile.username}</h1>
							</div>
						</div>
					</div>
					
					<div className={"bg-beige py-10 px-6 rounded-md"}>
						<div className={"mx-auto"}>
							<div className="flex flex-wrap align-items-center justify-center">
								<button className={"btn btn-dark my-5 mr-3"}>
									<span className={"btn-text"}>Ajouter en amis</span>
								</button>
							</div>
							<PassportInformation
								album={profile.album}
								statistics={profile.statistics}
							/>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	);
}

export default ProfilePage