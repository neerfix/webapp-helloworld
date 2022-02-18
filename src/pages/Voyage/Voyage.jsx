import React from 'react';

// Style
import '@/assets/styles/scss/pages/voyage.scss';

// Icones
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {BsCurrencyDollar} from 'react-icons/bs';
import {BiTimeFive} from 'react-icons/bi';

// Component
import AlbumPreview from "@/components/AlbumPreview";
import VoyageStepCard from "@/components/VoyageStep";

class VoyagePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            voyage: {
                title : "Roadtrip en Afrique",
                user : {
                    id: 12345,
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
                date_start: "18/07/2022",
                date_end: "20/08/2022",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum tristique erat et laoreet. Vivamus posuere feugiat rhoncus. ",
                steps: [
                    {
                        place: "Twelve Apostles Oudekraal",
                        date_start: "18/07/2022",
                        date_end: "20/08/2022",
                        description: "Ceci est la description de mon étape numéro uno",
                        album: [
                            "https://jesuispartievoyager.com/wp-content/uploads/2018/03/animaux-traversant-route-afrique-sud-4.jpg",
                            "https://www.andbeyond.com/wp-content/uploads/sites/5/gorah-elephant-camp-south-africa-view-elephantss-waterholes.jpg",
                            "https://www.nationsonline.org/gallery/South-Africa/Twelve-Apostles-Oudekraal.jpg",
                            "https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800"
                        ],
                    },
                    {
                        place: "Camp South Africa",
                        date_start: "18/07/2022",
                        date_end: "20/08/2022",
                        description: "Ceci est la description de mon étape numéro uno",
                        album: [
                            "https://www.nationsonline.org/gallery/South-Africa/Twelve-Apostles-Oudekraal.jpg",
                            "https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800"
                        ],
                    },
                    {
                        place: "Kirstenbosch garden",
                        date_start: "18/07/2022",
                        date_end: "20/08/2022",
                        description: "Ceci est la description de mon étape numéro uno",
                        album: [
                            "https://www.andbeyond.com/wp-content/uploads/sites/5/gorah-elephant-camp-south-africa-view-elephantss-waterholes.jpg",
                        ],
                    },
                    {
                        place: "Elephant lake",
                        date_start: "18/07/2022",
                        date_end: "20/08/2022",
                        description: "Ceci est la description de mon étape numéro uno",
                        album: [
                            "https://jesuispartievoyager.com/wp-content/uploads/2018/03/animaux-traversant-route-afrique-sud-4.jpg",
                            "https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800"
                        ],
                    }
                ]
            }
        };
    }

    componentDidMount() {
        fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        voyage: result.voyage
                    });
                },
                // Remarque : il est important de traiter les erreurs ici
                // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
                // des exceptions provenant de réels bugs du composant.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
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
                            <img src={this.state.voyage.thumbnail} alt="" className="w-full"/>
                        </div>

                        <div className="container mx-auto">
                            <div className="travel-card relative rounded-xl bg-white mx-5 py-5 mb-10">
                                <div className="title-container pr-5">
                                    <h1 className='h1'>{this.state.voyage.title}</h1>
                                </div>

                                <div className="grid grid-col-12">
                                    <div className='flex justify-center flex-wrap'>
                                        <button className="btn btn-dark m-3">
                                            <span className="btn-text">Suivre</span>
                                        </button>

                                        <button className="btn btn-outline m-3">
                                            <span className="btn-text">
                                                <span className="hidden sm:inline-block">Ajouter à la&nbsp;</span>
                                                <span className="inline-block sm:hidden">+&nbsp;</span>
                                                liste de souhait
                                            </span>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-12 lg:px-5">

                                        <div className="py-1 px-4 mr-3 pr-5 card-user col-span-12 lg:col-span-3">
                                            <a className="flex items-center justify-center my-2" href={"/passport/" + this.state.voyage.user.id}>
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
                                                du {this.state.voyage.date_start} au {this.state.voyage.date_end}
                                            </span>
                                        </div>

                                        <p className="col-span-12 px-5 my-3 text-dark">
                                            {this.state.voyage.description} 
                                        </p>

                                    </div>

                                    <div className="px-0 lg:px-5 my-3">
                                        <AlbumPreview album={this.state.voyage.gallery} />
                                    </div>

                                    <hr className="my-5 opacity-30"/>

                                    <div className="title-container pr-5">
                                        <h2 className='h2'>étapes</h2>
                                    </div>

                                    {/* TODO MAP */}

                                    {this.state.voyage.steps.map((element, i) => {
                                        return (
                                            <VoyageStepCard number={i + 1} place={element.place} date_start={element.date_start} date_end={element.date_end} description={element.description} album={element.album} />
                                        ) 
                                    })}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            );
        }
    }
}

export default VoyagePage;