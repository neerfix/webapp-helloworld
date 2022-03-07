import React from 'react';
import { useEffect, useState } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const VoyageStepPage = () => {
	const [step, setStep] = useState({
		id: 25,
		voyage_id: 2345,
		step_count: 2,
		place: "Twelve Apostles Oudekraal",
		date_start: "2022-07-18",
		date_end: "2022-07-20",
		description: "Ceci est la description de mon étape numéro deux",
		latitude: -33.9813889,
		longitude: 18.3813889,
		album: [
			"https://jesuispartievoyager.com/wp-content/uploads/2018/03/animaux-traversant-route-afrique-sud-4.jpg",
			"https://www.andbeyond.com/wp-content/uploads/sites/5/gorah-elephant-camp-south-africa-view-elephantss-waterholes.jpg",
			"https://www.nationsonline.org/gallery/South-Africa/Twelve-Apostles-Oudekraal.jpg",
			"https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800"
		],
	});
	
	/*** React hooks ***/
	
	useEffect(() => {
		// TODO: Call Api to get voyage information
	});
	
	/*** Custom functions ***/
	
	const handleChange = (event) => {
		setStep({
			...step,
		});
	};
	
	const saveStep = (event) => {
		event.preventDefault();
		
		const payload = {
			...step,
		};
		
		// TODO: Call api to save voyage modification
		console.log(payload);
	};
	
	return (
		<div id={"step"} className={"mx-auto bg-white"}>
			<div className="compass"></div>
			<div className={"w-full"}>
				<div className="title-container">
					<h2 className='h2'>Editer mon étape</h2>
					<button className={"btn btn-beige btn-icon ml-auto mr-5"} type={"submit"}>
                        <RiDeleteBin6Line />
					</button>
				</div>
			</div>
			<div className={"bg-beige py-10"}>
				<form onSubmit={saveStep}>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Titre de l'étape</label>
							<input
								type={"text"}
								name={"place"}
								value={step.place}
								required
								className={"focus:border-dark-brown focus:ring-dark-brown"}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Description</label>
							<input
								type={"text"}
								name={"description"}
								value={step.description}
								required
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					
					<div className={"divider"}></div>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Date de début</label>
							<input
								type={"date"}
								name={"date_start"}
								value={step.date_start}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Date de fin</label>
							<input
								type={"date"}
								name={"date_end"}
								value={step.date_end}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>

					<button className={"btn btn-outline mx-auto my-5"} type={"button"}>
						<span className={"btn-text"}>Gérer l'album de l'étape</span>
					</button>

					<div className={"divider"}></div>
					<button className={"btn btn-dark mx-auto my-5"} type={"submit"}>
						<span className={"btn-text"}>Sauvegarder</span>
					</button>
                                    
					<NavLink to={"/voyage/edit/" + step.voyage_id }>
						<button className={"btn btn-outline mx-auto my-5"} type={"button"}>
							<span className={"btn-text"}>Gérer le voyage</span>
						</button>
					</NavLink>
				</form>
			</div>
		</div>
	);
};

export default VoyageStepPage;
