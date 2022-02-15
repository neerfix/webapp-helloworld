// Components
import DestinationCard from '@/components/DestinationCard'

// Icones
import {BiChevronDown} from 'react-icons/bi';

// Images
import PlanetEarthImg from '@/assets/images/homepage/planet-earth.png';

const HomePage = () => {
	return (
		<div className='bg-beige'>
			<Header />
			<main id="homepage" className="mx-auto">
				<div className="grid grid-flow-col mb-20" id="hero-banner">
					<div className="px-20">
						<h1 id="main-title" className="text-7xl lg:text-9xl mt-20">
							Hello
							<br/>
							World
						</h1>
					</div>
				</div>
				<div>1 2 3</div>
				<div>
					<button>
						<BiChevronDown />
					</button>
				</div>
				<div id="bloc-map">
					<div className="bg-white rounded-3xl overflow-hidden mb-10 w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
						<div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
							<div className="title-centered">
								<h2>
									Carte des voyages
								</h2>
							</div>
							<button className="btn bg-beige mx-auto my-5">
								<span className="btn-text">Parcourir le monde</span>
							</button>
						</div>
						<div className="earth-visual">
							<div className="earth-visual-coords w-full">
								<span className="coords coords-left">
									N 43.1586°
									<br />
									E 12.23505°
								</span>
								<span className="coords coords-right mt-5">
									N 48.14305°
									<br />
									E 17.13055°
								</span>
							</div>
							<img src={PlanetEarthImg} alt="" />
						</div>
					</div>
					
					<button className="btn btn-dark mx-auto my-5">
						<span className="btn-text">Mon passeport</span>
					</button>
				</div>
				<div id="bloc-popular" className="my-20 py-10">
					<div className="title-container">
						<h2>Destinations populaires</h2>
					</div>
					<div className="container my-10">
						<DestinationCard 
							title="Rome" country="Italie" link="/roma" img="https://picsum.photos/id/123/145/145" />
						<DestinationCard 
							title="New York" country="Etats-Unis" link="/new-york" img="https://picsum.photos/id/115/145/145" />
						<DestinationCard 
							title="Tahunanui" country="Nouvelle Zélande" link="/new-zealand" img="https://picsum.photos/id/175/145/145" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default HomePage