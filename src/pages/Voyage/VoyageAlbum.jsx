import React, { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import update from "immutability-helper";
import cuid from "cuid";

import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { isTouchDevice } from "../../utils";

// Component
import Dropzone from "@/components/Dropzone";
import ImageList from "@/components/ImageList";

import '@/assets/styles/scss/pages/album.scss';

const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend;

const VoyageAlbumPage = () => {

    const [images, setImages] = useState([
        {
          id: 'abcd123',
          src: "https://jesuispartievoyager.com/wp-content/uploads/2018/03/animaux-traversant-route-afrique-sud-4.jpg",
        },
        {
          id: 'zxy123456',
          src: "https://www.andbeyond.com/wp-content/uploads/sites/5/gorah-elephant-camp-south-africa-view-elephantss-waterholes.jpg",
        },
        {
          id: 'zxefy123456',
          src: "https://www.nationsonline.org/gallery/South-Africa/Twelve-Apostles-Oudekraal.jpg",
        },
        {
          id: 'zd34546',
          src: "https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800",
        },
        {
          id: 'zd3444ef4546',
          src: "https://media-cdn.tripadvisor.com/media/photo-s/22/0f/cd/32/oo-cape-town-exterior.jpg",
        },
        {
          id: 'zd34efefe444546',
          src: "https://images.squarespace-cdn.com/content/v1/58088d02197aeaf2957b9033/1582122726984-9CDYVORTYCRE2OTBYLX8/Top+5+des+march%C3%A9s+sur+Cape+Town",
        },
        {
          id: 'zd34444efef546',
          src: "https://www.safarieksperten.dk/app/webroot/_resized/uploads/galleri/cape-town/liv-ved-waterfront--cape-town--sydafrika-8ff396ac2c6e9c90977b95519c439163.jpg",
        }
    ]);

    let { voyageId, stepId } = useParams();
    if( voyageId ) voyageId = parseInt(voyageId);
    if( stepId ) stepId = parseInt(stepId);
	
	/*** React hooks ***/
	
	useEffect(() => {
		// TODO: Call Api to get voyage information
	});
	
	/*** Custom functions ***/
	
	const handleChange = (event) => {
		setImages({
			...images,
		});
	};
	
	const saveImages = (event) => {
		event.preventDefault();
		
		const payload = {
			...images,
		};
		
		// TODO: Call api to save voyage modification
		console.log(payload);
	};

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.map(file => {
          const reader = new FileReader();
          reader.onload = function(e) {
            setImages(prevState => [
              ...prevState,
              { id: cuid(), src: e.target.result }
            ]);
          };
          reader.readAsDataURL(file);
          return file;
        });
      }, []);
    
    const moveImage = (dragIndex, hoverIndex) => {
        const draggedImage = images[dragIndex];
        setImages(
            update(images, {
            $splice: [[dragIndex, 1], [hoverIndex, 0, draggedImage]]
            })
        );
    };
	
	return (
		<div id={"album"} className={"mx-auto bg-white"}>
			<div className="compass"></div>
			<div className={"w-full"}>
				<div className="title-container">
					<h2 className='h2'>
                        Editer mon album&nbsp;
                        {!stepId && <span>de voyage</span>}
                        {stepId && <span>d'étape</span>}
                    </h2>
					<button className={"btn btn-beige btn-icon ml-auto mr-5"} type={"submit"}>
                        <RiDeleteBin6Line />
					</button>
				</div>
			</div>
			<div className={"bg-beige py-10"}>
				<form onSubmit={saveImages}>

                    <Dropzone onDrop={onDrop} accept={"image/*"} />
                    {images && images.length > 0 && (
                        <div class="flex align-items-center justify-between mx-10">
                            <p>Glissez et déposez les images pour les réorganiser</p>
                            <p>{images.length} image(s)</p>
                        </div>
                    )}
                    <DndProvider backend={backendForDND}>
                        <ImageList images={images} moveImage={moveImage} />
                    </DndProvider>

					<div className={"divider"}></div>

					<button className={"btn btn-dark mx-auto my-5"} type={"submit"}>
						<span className={"btn-text"}>Sauvegarder l'album</span>
					</button>
                                    
					<NavLink to={"/voyage/edit/" + voyageId }>
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
