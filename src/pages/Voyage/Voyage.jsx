import React from 'react';

// Style
import '@/assets/styles/scss/pages/voyage.scss';

// Icones
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { FiEdit3 } from "react-icons/fi";
import { NavLink, useParams } from "react-router-dom";

// Component
import AlbumPreview from "@/components/AlbumPreview";
import VoyageStepCard from "@/components/VoyageStep";
import Map from '@/components/Map'

// Routes
import { getTravelDetails } from "@/api/_travelApi";

class VoyagePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            voyage: {
                id: 2345,
                title: "Roadtrip en Afrique",
                user: {
                    id: '4d257253-1991-42a8-8187-0660fef87614',
                    name: "JohnDoe",
                    avatar: "https://avatars.githubusercontent.com/u/827205?v=4",
                },
                gallery: [
                    "https://jesuispartievoyager.com/wp-content/uploads/2018/03/animaux-traversant-route-afrique-sud-4.jpg",
                    "https://www.andbeyond.com/wp-content/uploads/sites/5/gorah-elephant-camp-south-africa-view-elephantss-waterholes.jpg",
                    "https://www.nationsonline.org/gallery/South-Africa/Twelve-Apostles-Oudekraal.jpg",
                    "https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800",
                    "https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800",
                    "https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800"
                ],
                thumbnail: "https://media.timeout.com/images/105274435/image.jpg",
                budget: "2000 €",
                location: "Afrique du Sud",
                dateStart: "18/07/2022",
                dateEnd: "20/08/2022",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum tristique erat et laoreet. Vivamus posuere feugiat rhoncus. ",
                steps: [
                    {
                        id: 1,
                        stepCount: 1,
                        place: "Twelve Apostles Oudekraal",
                        dateStart: "18/07/2022",
                        dateEnd: "20/08/2022",
                        description: "Ceci est la description de mon étape numéro uno",
                        latitude: -33.9813889,
                        longitude: 18.3813889,
                        album: [
                            "https://jesuispartievoyager.com/wp-content/uploads/2018/03/animaux-traversant-route-afrique-sud-4.jpg",
                            "https://www.andbeyond.com/wp-content/uploads/sites/5/gorah-elephant-camp-south-africa-view-elephantss-waterholes.jpg",
                            "https://www.nationsonline.org/gallery/South-Africa/Twelve-Apostles-Oudekraal.jpg",
                            "https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800"
                        ],
                    },
                    {
                        id: 2,
                        stepCount: 2,
                        place: "Table Mountain National Park",
                        dateStart: "18/07/2022",
                        dateEnd: "20/08/2022",
                        description: "Ceci est la description de mon étape numéro uno",
                        latitude: -33.9875117,
                        longitude: 18.3658512,
                        album: [
                            "https://www.nationsonline.org/gallery/South-Africa/Twelve-Apostles-Oudekraal.jpg",
                            "https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800"
                        ],
                    },
                    {
                        id: 3,
                        stepCount: 3,
                        place: "Kirstenbosch garden",
                        dateStart: "18/07/2022",
                        dateEnd: "20/08/2022",
                        description: "Ceci est la description de mon étape numéro uno",
                        latitude: -33.9874966,
                        longitude: 18.4305333,
                        album: [
                            "https://www.andbeyond.com/wp-content/uploads/sites/5/gorah-elephant-camp-south-africa-view-elephantss-waterholes.jpg",
                        ],
                    },
                    {
                        id: 4,
                        stepCount: 4,
                        place: "Cape Town",
                        dateStart: "18/07/2022",
                        dateEnd: "20/08/2022",
                        description: "Ceci est la description de ma dernière étape",
                        latitude: -33.918861,
                        longitude: 18.423300,
                        album: [
                            "https://jesuispartievoyager.com/wp-content/uploads/2018/03/animaux-traversant-route-afrique-sud-4.jpg",
                            "https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800"
                        ],
                    }
                ]
            }
        };
    }

    async componentDidMount() {
        const voyageId = this.props.params.voyageId;

        await getTravelDetails(voyageId)
        .then(async (response) => {
            let voyageResponse = response.data.data;
            if(voyageResponse){
                let formattedVoyage = {
                    id: voyageResponse.uuid,
                    title: voyageResponse.name,
                    user: {
                        id: voyageResponse.userId.uuid,
                        name: voyageResponse.userId.username,
                        avatar: "https://static.vecteezy.com/system/resources/thumbnails/004/416/817/small/man-traveler-with-backpack-pointing-out-vector.jpg",
                    },
                    thumbnail: "https://media.timeout.com/images/105274435/image.jpg",
                    budget: voyageResponse.budget,
                    location: voyageResponse.placeId.name,
                    dateStart: "18/07/2022",
                    dateEnd: "20/08/2022",
                    description: voyageResponse.description,
                }
                this.setState({
                    isLoaded: true,
                    voyage: formattedVoyage
                });
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        const { voyage, error, isLoaded } = this.state;
        if (!voyage && error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!voyage && !isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <div>
                    <div id="voyagepage" className="mx-auto">

                        <div className="voyage-img absolute top-0">
                            <img src={this.state.voyage.thumbnail} alt="" className="w-full" />
                        </div>

                        <div className="container mx-auto">
                            <div className="travel-card relative rounded-xl bg-white mx-5 py-5 mb-10">
                                <div className="title-container pr-5">
                                    <h1 className='h1'>{this.state.voyage.title}</h1>

                                    <NavLink to={"/voyage/edit/" + this.state.voyage.id}>
                                        <button className={"btn btn-icon btn-outline ml-5"}>
                                            <FiEdit3 />
                                        </button>
                                    </NavLink>
                                </div>

                                <div className="grid grid-col-12">
                                    <div className='flex justify-center flex-wrap'>
                                        <button className="btn btn-dark m-3">
                                            <span className="btn-text">Suivre</span>
                                        </button>

                                        <NavLink to={"/voyage/wishlist"}>
                                            <button className="btn btn-outline m-3">
                                                <span className="btn-text">
                                                    <span className="hidden sm:inline-block">Ajouter à la&nbsp;</span>
                                                    <span className="inline-block sm:hidden">+&nbsp;</span>
                                                    liste de souhait
                                                </span>
                                            </button>
                                        </NavLink>
                                    </div>

                                    <div className="grid grid-cols-12 lg:px-5">

                                        <div className="py-1 px-4 mr-3 pr-5 card-user col-span-12 lg:col-span-3">
                                            <a className="flex items-center justify-center my-2" href={"/profile/" + this.state.voyage.user.id}>
                                                <img className="rounded-md mr-2" src={this.state.voyage.user.avatar} width="100" height="100" alt="" />
                                                <span className="text-xl md:text-2xl">
                                                    {this.state.voyage.user.name}
                                                </span>
                                            </a>
                                        </div>

                                        <div className="voyage-info flex items-center justify-center my-4 mx-4 text-brown col-span-11 lg:col-span-3">
                                            <span className="info-icon mr-5">
                                                <HiOutlineLocationMarker size="25" />
                                            </span>
                                            <span className="info-text">
                                                {this.state.voyage.location}
                                            </span>
                                        </div>

                                        <div className="voyage-info flex items-center justify-center my-4 mx-4 text-brown col-span-11 lg:col-span-3">
                                            <span className="info-icon mr-5">
                                                <BsCurrencyDollar size="25" />
                                            </span>
                                            <span className="info-text">
                                                {this.state.voyage.budget}
                                            </span>
                                        </div>

                                        <div className="voyage-info flex items-center justify-center my-4 mx-4 text-brown col-span-11 lg:col-span-3">
                                            <span className="info-icon mr-5">
                                                <BiTimeFive size="25" />
                                            </span>
                                            <span className="info-text">
                                                du {this.state.voyage.dateStart} au {this.state.voyage.dateEnd}
                                            </span>
                                        </div>

                                        <p className="col-span-12 px-5 my-3 text-dark">
                                            {this.state.voyage.description}
                                        </p>

                                    </div>

                                    <div className="px-0 lg:px-5 my-3">
                                        {this.state.voyage.gallery && 
                                            <AlbumPreview album={this.state.voyage.gallery} />
                                        }
                                    </div>

                                    <hr className="my-5 opacity-30" />


                                    {this.state.voyage.steps && 
                                        <div>
                                            <div className="title-container pr-5">
                                                <h2 className='h2'>étapes</h2>
                                            </div>

                                            <main id="interactive-map">
                                                <Map steps={this.state.voyage.steps} />
                                            </main>

                                            {this.state.voyage.steps.map((element, i) => {
                                                return (
                                                    <VoyageStepCard key={i} number={i + 1} place={element.place} dateStart={element.dateStart} dateEnd={element.dateEnd} description={element.description} album={element.album} />
                                                )
                                            })}
                                        </div>
                                     }
                                    

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            );
        }
    }
}

const VoyagePageExport = (props) => (
        <VoyagePage
            {...props}
            params={useParams()}
        />
);

export default VoyagePageExport