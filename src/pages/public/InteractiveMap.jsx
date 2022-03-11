import React, { useState, useEffect } from "react";
import Map from '@/components/Map';

import { getPopularTravels } from "@/api/_travelApi";

const InteractiveMap = () => {

	const [steps, setSteps] = useState([]);
	
    const handleTravels = async (e) => {
        await getPopularTravels()
            .then((response) => {
				let tempSteps = [];
				response = response.data;
				if(response){
					response.forEach(voyage => {
						tempSteps.push(
							{
								id: voyage.uuid,
								place: voyage.name,
								description: voyage.description,
								latitude: 41.871940,
								longitude: 12.567380,
							}
						)
					});
					setSteps(tempSteps);
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
						Aucun voyage pour l'instant...
					</p>
				}
			</main>
		</div>
	)
}

export default InteractiveMap
