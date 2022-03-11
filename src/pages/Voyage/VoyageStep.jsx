import React from 'react';
import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

const VoyageStepPage = () => {
	const [step, setStep] = useState({
		voyageId: 2345,
		stepCount: 6,
		place: "",
		dateStart: "",
		dateEnd: "",
		description: "",
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
		<div id={"step"} className={"bg-white"}>
			<div className="compass"></div>
			<div className={"w-full"}>
				<div className="title-container">
					<h2 className='h2'>Ajouter une étape</h2>
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
								name={"dateStart"}
								value={step.dateStart}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Date de fin</label>
							<input
								type={"date"}
								name={"dateEnd"}
								value={step.dateEnd}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>

					<div className={"divider"}></div>
					<button className={"btn btn-dark mx-auto my-5"} type={"submit"}>
						<span className={"btn-text"}>Ajouter</span>
					</button>
                                    
					<NavLink to={"/voyage/edit/" + step.voyageId }>
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
