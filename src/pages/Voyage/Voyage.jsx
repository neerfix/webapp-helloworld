import React from 'react';

// Style
import '@/assets/styles/scss/pages/voyage.scss';

// Icones
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {BsCurrencyDollar} from 'react-icons/bs';
import {BiTimeFive} from 'react-icons/bi';

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
                    "https://instagram.fcdg3-1.fna.fbcdn.net/v/t51.2885-15/e35/74917704_2379710289010816_8003086330663095139_n.jpg?_nc_ht=instagram.fcdg3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ntwtTsS6iGEAX_2_0wC&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjE3NzEzNTQ0NDU5NzI4MTg5OQ%3D%3D.2-ccb7-4&oh=00_AT_93mklUoagQ84Sw6-QFWo1utMsL7vzc25pM8HiakDy-A&oe=6216C279&_nc_sid=30a2ef",
                    "https://www.andbeyond.com/wp-content/uploads/sites/5/gorah-elephant-camp-south-africa-view-elephantss-waterholes.jpg",
                    "https://www.nationsonline.org/gallery/South-Africa/Twelve-Apostles-Oudekraal.jpg",
                    "https://lp-cms-production.imgix.net/2021-10/Beautiful%20flowering%20aloes%20in%20the%20Kirstenbosch%20Gardens%2C%20Cape%20Town%2C%20South%20Africa%20Julian%20Parsons%20GettyImages-1162549479%20rfc.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800"
                ],
                thumbnail: "https://media.timeout.com/images/105274435/image.jpg",
                budget: "2000 €",
                location: "Afrique du Sud",
                date_start: "18/07/2022",
                date_end: "20/08/2022",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum tristique erat et laoreet. Vivamus posuere feugiat rhoncus. ",
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
        const { voyage, error, isLoaded, items } = this.state;
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
                            <div className="travel-card relative rounded-xl bg-white mx-5 py-5">
                                <div className="title-container pr-5">
                                    <h1 className='h1'>{this.state.voyage.title}</h1>
                                </div>

                                <div className="grid grid-col-12">
                                    <div className='flex justify-center flex-wrap'>
                                        <button className="btn btn-dark mx-3 my-5">
                                            <span className="btn-text">Suivre</span>
                                        </button>

                                        <button className="btn btn-outline mx-3 my-5">
                                            <span className="btn-text">
                                                <span class="hidden sm:inline-block">Ajouter à la&nbsp;</span>
                                                <span class="inline-block sm:hidden">+&nbsp;</span>
                                                liste de souhait
                                            </span>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-12">

                                        <div className="py-1 px-4 mr-3 pr-5 card-user col-span-12 lg:col-span-3">
                                            <a className="flex items-center justify-center my-2" href={"/passport/" + this.state.voyage.user.id}>
                                                <img className="rounded-md mr-2" src={this.state.voyage.user.avatar} width="100" height="100" alt="" />
                                                <span class="text-xl md:text-2xl">
                                                    {this.state.voyage.user.name}
                                                </span>
                                            </a>
                                        </div>  

                                        <div className="voyage-info flex items-center justify-center my-4 mx-4 text-brown col-span-11 lg:col-span-3">
                                            <span class="info-icon mr-5">
                                                <HiOutlineLocationMarker size="25" />
                                            </span>
                                            <span class="info-text">
                                                {this.state.voyage.location}
                                            </span>
                                        </div>  

                                        <div className="voyage-info flex items-center justify-center my-4 mx-4 text-brown col-span-11 lg:col-span-3">
                                            <span class="info-icon mr-5">
                                                <BsCurrencyDollar size="25" />
                                            </span>
                                            <span class="info-text">
                                                {this.state.voyage.budget}
                                            </span>
                                        </div>

                                        <div className="voyage-info flex items-center justify-center my-4 mx-4 text-brown col-span-11 lg:col-span-3">
                                            <span class="info-icon mr-5">
                                                <BiTimeFive size="25" />
                                            </span>
                                            <span class="info-text">
                                                du {this.state.voyage.date_start} au {this.state.voyage.date_end}
                                            </span>
                                        </div>

                                        <p class="col-span-12 px-2 my-3 text-dark">
                                            {this.state.voyage.description} 
                                        </p>

                                    </div>
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