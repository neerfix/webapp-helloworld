import React from 'react';
import { useEffect, useState } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const VoyageEditPage = () => {
	const [voyage, setVoyage] = useState({
		idVoyage: 2345,
        title: "Roadtrip en Afrique",
        budget: "2000 €",
        location: "Afrique du Sud",
        dateStart: "2022-03-15",
        dateEnd: "2022-08-20",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum tristique erat et laoreet. Vivamus posuere feugiat rhoncus. ",
        steps: [
            {
                idStep: 1,
                stepCount: 1,
                place: "Twelve Apostles Oudekraal",
            },
            {
                idStep: 2,
                stepCount: 2,
                place: "Table Mountain National Park",
            },
            {
                idStep: 3,
                stepCount: 3,
                place: "Kirstenbosch garden",
            },
            {
                idStep: 4,
                stepCount: 4,
                place: "Cape Town",
            }
        ]
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
		<div id={"voyage"} className={"mx-auto bg-white"}>
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
								name={"dateStart"}
								value={voyage.dateStart}
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
								value={voyage.dateEnd}
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
                    
					<div className={"grid grid-cols-9 gap-4"}>
                        {voyage.steps.map((element, i) => {
                            return (
                                <div className="col-span-7 col-start-2 flex justify-between align-center my-2">
                                    <div className="voyage-step-card rounded-md">
                                        <p className="text-xl mb-2 text-black capitalize">étape {element.stepCount} : {element.place}</p>
                                    </div>
                                    
                                    <NavLink to={"/voyage/step/" + voyage.idVoyage + "/" + element.idStep }>
                                        <button className={"btn btn-icon btn-outline"}>
                                            <FiEdit3 />
                                        </button>
                                    </NavLink>
                                </div>
                            )
                        })}
                    </div>

                    <NavLink to={"/voyage/step/" + voyage.idVoyage }>
                        <button className={"btn btn-outline mx-auto my-5"} type={"button"}>
                            <span className={"btn-text"}>Ajouter une étape</span>
                        </button>
                    </NavLink>

					<div className={"divider"}></div>
					<button className={"btn btn-dark mx-auto my-5"} type={"submit"}>
						<span className={"btn-text"}>Sauvegarder</span>
					</button>
                    
					<NavLink to={"/voyage/album/" + voyage.idVoyage }>
                        <button className={"btn btn-outline mx-auto my-5"} type={"button"}>
                            <span className={"btn-text"}>Gérer l'album global</span>
                        </button>
					</NavLink>

				</form>
			</div>
		</div>
	);
};

export default VoyageEditPage;
