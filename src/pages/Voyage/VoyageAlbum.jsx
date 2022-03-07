import React from 'react';
import { useEffect, useState } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";

const VoyageAlbumPage = () => {
	const [voyage, setVoyage] = useState({
		id: 2345,
        title: "Roadtrip en Afrique",
        budget: "2000 €",
        location: "Afrique du Sud",
        date_start: "2022-03-15",
        date_end: "2022-08-20",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum tristique erat et laoreet. Vivamus posuere feugiat rhoncus. ",
	});
	
	const [visibility, setVisibility] = useState(0);
	
	/*** React hooks ***/
	
	useEffect(() => {
		// TODO: Call Api to get voyage information
	});
	
	/*** Custom functions ***/
	
	const handleChange = (event) => {
		setVoyage({
			...voyage,
			[event.target.name]: event.target.value,
		});
	};
	
	const saveVoyage = (event) => {
		event.preventDefault();
		
		const payload = {
			...voyage,
			visibility: visibility,
		};
		
		// TODO: Call api to save voyage modification
		console.log(payload);
	};
	
	return (
		<div id={"passport"} className={"mx-auto bg-white"}>
			<div className="compass"></div>
			<div className={"w-full"}>
				<div className="title-container">
					<h2 className='h2'>Editer mon voyage</h2>
					<button className={"btn btn-beige btn-icon ml-auto mr-5"} type={"submit"}>
                        <RiDeleteBin6Line />
					</button>
				</div>
			</div>
			<div className={"bg-beige py-10"}>
				<form onSubmit={saveVoyage}>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Titre du voyage</label>
							<input
								type={"text"}
								name={"title"}
								value={voyage.title}
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
								value={voyage.description}
								required
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className={"divider"}></div>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Budget</label>
							<input
								type={"text"}
								name={"budget"}
								value={voyage.budget}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Lieu</label>
							<input
								type={"text"}
								name={"location"}
								value={voyage.location}
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
								value={voyage.date_start}
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
								value={voyage.date_end}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>

					<div className={"divider"}></div>
					<div className={"grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Visibilité du voyage</label>
							<select
								value={visibility}
								onChange={(e) => setVisibility(e.target.value)}
							>
								<option value={0}>Privé</option>
								<option value={1}>Amis seulement</option>
								<option value={2}>Public</option>
							</select>
						</div>
					</div>
					<div className={"divider"}></div>
					<button className={"btn btn-dark mx-auto my-5"} type={"submit"}>
						<span className={"btn-text"}>Sauvegarder</span>
					</button>
					<button className={"btn btn-outline mx-auto my-5"} type={"button"}>
						<span className={"btn-text"}>Gérer les étapes</span>
					</button>
					<button className={"btn btn-outline mx-auto my-5"} type={"button"}>
						<span className={"btn-text"}>Gérer l'album global</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default VoyageAlbumPage;
