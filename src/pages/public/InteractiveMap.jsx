// Icones
//import { VscChevronDown } from 'react-icons/vsc';
import Map from '@/components/Map';
import { useState } from "react";

const InteractiveMap = () => {

	const steps = [
		{
			id: 2345,
			place: "Voyage en Italie",
			description: "Ceci est la description de mon voyage",
			latitude: 41.871940,
			longitude: 12.567380,
		},
		{
			id: 23456,
			place: "Voyage en Espagne",
			description: "Ceci est la description de mon voyage",
			latitude: -3.749220,
			longitude: 40.463667,
		},
		{
			id: 33456,
			place: "Voyage au Brésil",
			description: "Ceci est la description de mon voyage",
			latitude: -14.235004,
			longitude: -51.92528,
		},
		{
			id: 423456,
			place: "Voyage à Cape Town",
			description: "Ceci est la description de ma dernière étape",
			latitude: -33.918861,
			longitude: 18.423300,
		},
		{
			id: 43456,
			place: "Voyage au Japon",
			description: "Ceci est la description de ma dernière étape",
			latitude: 35.652832,
			longitude: 139.839478,
		}
	]

	return (
		<div className='bg-beige'>
			<main id="interactive-map" className="w-full">
				<Map steps={steps} />
			</main>
		</div>
	)
}

export default InteractiveMap
