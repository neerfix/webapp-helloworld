import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import { NavLink } from "react-router-dom";

// Mapbox
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

// Routes
import { createTravel } from "@/api/_travelApi";

const VoyageEditPage = () => {

    let { voyageId } = useParams();
	let isGeocoderLoaded = false;
	
	const [isSharable, setIsSharable] = useState(false);

    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

	const [voyage, setVoyage] = useState({
		voyageId: null,
        name: "", // titre du voyage
        status: "active", // statut active
        isSharable: true, // voyage public ou privé 
        budget: "", // budget du voyage
        startedAt: "", // début du voyage Y-m-d
        endedAt: "", // fin du voyage Y-m-d
        description: "", // date de description
		place: {
			name: "", // required
			latitude: "", // required
			longitude: "" // required
		}
    });

	useEffect(() => {
		if(!isGeocoderLoaded && !geocoder) {
			var geocoder = new MapboxGeocoder({ accessToken: mapboxgl.accessToken });
			geocoder.addTo('#geocoder-container');
	
			geocoder.on('result', function(results) {
				let result = results.result
				voyage.place.name = result.place_name_fr;
				voyage.place.longitude = result.center[0];
				voyage.place.latitude = result.center[1];
				voyage.location = result.place_name_fr;
				console.log(voyage.place);
			})

			isGeocoderLoaded = true;
		}
	}, []);

    if( voyageId ) {
		voyage.voyageId = parseInt(voyageId);
		voyage.name = "Roadtrip en Afrique";
		voyage.status = "active";
		voyage.isSharable = true;
		voyage.budget = "2000 €";
		voyage.startedAt = "2022-03-15";
		voyage.endedAt = "2022-08-20";
		voyage.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum tristique erat et laoreet. Vivamus posuere feugiat rhoncus. ";
		voyage.place = {
			name: "Afrique du Sud",
			latitude: -30.559482,
			longitude: 	22.937506
		}
		voyage.steps = [
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
        ];
	}

	/*** Custom functions ***/
	
	const handleChange = (event) => {
		setVoyage({
			...voyage,
			[event.target.name]: event.target.value,
		});
	};
	
	const saveVoyage = async (event) => {
		event.preventDefault();

		console.log(voyage);
		
		const payload = {
			...voyage,
			isSharable: isSharable,
		};
		
		// TODO: Call api to save voyage modification
		console.log(payload);

		await createTravel(payload)
            .then(async (response) => {
                console.log(response);
				// Redirect
            })
            .catch((error) => {
                console.log(error)
            })
	};
	
	return (
		<div id={"voyage"} className={"bg-white"}>
			<div className="compass"></div>
			<div className={"w-full"}>
				<div className="title-container">
					<h2 className='h2'>
						{ voyageId && "Editer mon voyage" }
						{ !voyageId && "Ajouter un voyage" }
					</h2>
					{ voyageId && 
						<button className={"btn btn-beige btn-icon ml-auto mr-5"} type={"submit"}>
							<RiDeleteBin6Line />
						</button>
					}
				</div>
			</div>
			<div className={"bg-beige py-10"}>
				<form onSubmit={saveVoyage}>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Titre du voyage</label>
							<input
								type={"text"}
								name={"name"}
								value={voyage.name}
								required
								className={"focus:border-dark-brown focus:ring-dark-brown"}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Description (au moins 5 mots)</label>
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
								hidden
								id="place"
								className="place"
								type={"text"}
								name={"place_name"}
								value={voyage.place.name}
								onChange={(e) => handleChange(e)}
							/>
							<div id='geocoder-container' className="w-full"></div>
						</div>
					</div>
					<div className={"divider"}></div>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Date de début</label>
							<input
								type={"date"}
								name={"startedAt"}
								value={voyage.startedAt}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Date de fin</label>
							<input
								type={"date"}
								name={"endedAt"}
								value={voyage.endedAt}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>

					<div className={"divider"}></div>
					<div className={"grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Visibilité du voyage</label>
							<select
								value={isSharable}
								onChange={(e) => setIsSharable(e.target.value)}
							>
								<option value="true">Public</option>
								<option value="false">Privé</option>
							</select>
						</div>
					</div>
                    
					{ voyageId && 
						<div>
							<div className={"divider"}></div>
							<div className={"grid grid-cols-9 gap-4"}>
								{voyage.steps.map((element, i) => {
									return (
										<div className="col-span-7 col-start-2 flex justify-between align-center my-2">
											<div className="voyage-step-card rounded-md">
												<p className="text-xl mb-2 text-black capitalize">étape {element.stepCount} : {element.place}</p>
											</div>
											
											<NavLink to={"/voyage/step/" + voyage.voyageId + "/" + element.idStep }>
												<button className={"btn btn-icon btn-outline"}>
													<FiEdit3 />
												</button>
											</NavLink>
										</div>
									)
								})}
							</div>

							<NavLink to={"/voyage/step/" + voyage.voyageId }>
								<button className={"btn btn-outline mx-auto my-5"} type={"button"}>
									<span className={"btn-text"}>Ajouter une étape</span>
								</button>
							</NavLink>
						</div>
					}

					<div className={"divider"}></div>
					<button className={"btn btn-dark mx-auto my-5"} type={"submit"}>
						<span className={"btn-text"}>
							{ voyageId && "Sauvegarder" }
							{ !voyageId && "Enregistrer" }
						</span>
					</button>
                    
					{ voyageId && 
						<NavLink to={"/voyage/album/" + voyage.voyageId }>
							<button className={"btn btn-outline mx-auto my-5"} type={"button"}>
								<span className={"btn-text"}>Gérer l'album global</span>
							</button>
						</NavLink>
					}

				</form>
			</div>
		</div>
	);
};

export default VoyageEditPage;
