import React, { useState, useEffect } from "react";
import Map from '@/components/Map';

import { getPopularTravels } from "@/api/_travelApi";
import { getTravelDetails } from "@/api/_travelApi";

const InteractiveMap = () => {
	const authentication = JSON.parse(localStorage.getItem('authentication'))

	const [steps, setSteps] = useState([]);
	
    const handleTravels = (e) => {
        getPopularTravels()
            .then((response) => {
				let tempSteps = [];
				response = response.data;
				if(response){
					response.forEach((voyage) => {
						getTravelDetails(voyage.uuid)
						.then((stepResponse) => {
							stepResponse = stepResponse.data.data;
							tempSteps.push(
								{
									id: voyage.uuid,
									place: voyage.name,
									description: voyage.description,
									latitude: stepResponse.placeId.latitude,
									longitude: stepResponse.placeId.longitude,
								}
							);
							setSteps(tempSteps);
						});
					});
				}
            })
            .catch((error) => {
                console.log(error);
            })
    }

	useEffect(() => {
        handleTravels();
    }, [])

	return (
		<div className='bg-beige'>
			<main id="interactive-map" className="w-full">
				{(steps.length > 0) &&
					<Map steps={steps} />
				}
				{!steps.length &&
					<p className="m-5 text-center">

						{authentication && 
							"Aucun voyage pour l'instant. "
						}
						{!authentication && 
							"Veuillez vous connecter pour consulter les voyages."
						}
						
					</p>
				}
			</main>
		</div>
	)
}

export default InteractiveMap
