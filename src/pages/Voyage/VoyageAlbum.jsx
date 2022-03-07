import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const VoyageAlbumPage = () => {
	const [album, setAlbum] = useState({
        gallery: [
            "https://jesuispartievoyager.com/wp-content/uploads/2018/03/animaux-traversant-route-afrique-sud-4.jpg",
            "https://www.andbeyond.com/wp-content/uploads/sites/5/gorah-elephant-camp-south-africa-view-elephantss-waterholes.jpg",
            "https://www.nationsonline.org/gallery/South-Africa/Twelve-Apostles-Oudekraal.jpg",
            "https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800",
            "https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800",
            "https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800"
        ],
	});

    let { voyageId, stepId } = useParams();
    if( voyageId ) album.voyageId = parseInt(voyageId);
    if( stepId ) album.stepId = parseInt(stepId);
	
	/*** React hooks ***/
	
	useEffect(() => {
		// TODO: Call Api to get voyage information
	});
	
	/*** Custom functions ***/
	
	const handleChange = (event) => {
		setAlbum({
			...album,
		});
	};
	
	const saveAlbum = (event) => {
		event.preventDefault();
		
		const payload = {
			...album,
		};
		
		// TODO: Call api to save voyage modification
		console.log(payload);
	};
	
	return (
		<div id={"album"} className={"mx-auto bg-white"}>
			<div className="compass"></div>
			<div className={"w-full"}>
				<div className="title-container">
					<h2 className='h2'>
                        Editer mon album&nbsp;
                        {!album.stepId && <span>de voyage</span>}
                        {album.stepId && <span>d'étape</span>}
                    </h2>
					<button className={"btn btn-beige btn-icon ml-auto mr-5"} type={"submit"}>
                        <RiDeleteBin6Line />
					</button>
				</div>
			</div>
			<div className={"bg-beige py-10"}>
				<form onSubmit={saveAlbum}>
                    {album.stepId > 0 && 
                        <div className={"mb-4 grid grid-cols-9 gap-4"}>
                            Album d'étape
                        </div>
                    }

                    {!album.stepId && 
                        <div className={"mb-4 grid grid-cols-9 gap-4"}>
                            Album global de voyage
                        </div>
                    }

					<div className={"divider"}></div>

					<button className={"btn btn-dark mx-auto my-5"} type={"submit"}>
						<span className={"btn-text"}>Sauvegarder l'album</span>
					</button>
                                    
					<NavLink to={"/voyage/edit/" + album.voyageId }>
						<button className={"btn btn-outline mx-auto my-5"} type={"button"}>
							<span className={"btn-text"}>Gérer le voyage</span>
						</button>
					</NavLink>

				</form>
			</div>
		</div>
	);
};

export default VoyageAlbumPage;
