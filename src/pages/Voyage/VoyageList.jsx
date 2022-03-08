import React from 'react';

// Style
import '@/assets/styles/scss/pages/voyage.scss';

// Component
import VoyageCard from '@/components/VoyageCard'
import Map from '@/components/Map'

class VoyageListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            voyages: [
                {
                    title : "Découverte de Noursoultan",
                    location: "Kazakhstan",
                    id : "234533",
                    image : "http://www.medefinternational.fr/wp-content/uploads/2019/07/Astana.jpg" 
                },
                {
                    title : "Yokohama, Nagoya, Osaka",
                    location: "Japon",
                    id : "23456",
                    image : "https://rsf.org/sites/default/files/japon1.jpg" 
                },
                {
                    title : "Séjour à Multan",
                    location: "Pakistan",
                    id : "7654",
                    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tomb_of_Shah_Rukn-e-Alam_View_Multan.jpg/1280px-Tomb_of_Shah_Rukn-e-Alam_View_Multan.jpg" 
                },
            ],
            steps: [
                {},
                {},
                {}
            ],
        };
    }

    componentDidMount() {
        // fetch("https://api.example.com/items")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 voyage: result.voyages
        //             });
        //         },
        //         // Remarque : il est important de traiter les erreurs ici
        //         // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        //         // des exceptions provenant de réels bugs du composant.
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )
    }

    render() {
        const { voyages, error, isLoaded } = this.state;
        if (0 && !voyages && error) {
            return <div>Erreur : {error.message}</div>;
        } else if (0 && !voyages && !isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <div>
                    <div id="voyagelist" className="mx-auto pt-5">
                        <div className="title-container pr-5">
                            <h1 className='h1'>Liste des voyages</h1>
                        </div>

                        <div className="container mx-auto">
                            <div className="travel-card relative rounded-xl bg-white mx-5 py-5 mb-10">

                                { this.state.voyages && this.state.voyages.markers && 
                                    <main id="interactive-map">
                                        <Map steps={this.state.voyages.markers} />
                                    </main>
                                }

                                <div className="grid grid-col-12">

                                    { this.state.voyages && 
                                        <div>
                                            {this.state.voyages.map((element, i) => {
                                                return (
                                                    <VoyageCard key={i} 
                                                    title={element.title} location={element.location} id={element.id} 
                                                     image={element.image} />
                                                )
                                            })}
                                        </div>
                                    }

                                    { !this.state.voyages && 
                                        <p>
                                            Aucun voyage trouvé
                                        </p>
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

export default VoyageListPage;