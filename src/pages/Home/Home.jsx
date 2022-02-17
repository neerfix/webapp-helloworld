// Components
import DestinationCard from '@/components/DestinationCard'

// Icones
import {VscChevronDown} from 'react-icons/vsc';

// Images
import PlanetEarthImg from '@/assets/images/homepage/planet-earth.png';

const HomePage = () => {
	return (
		<div className='bg-beige'>
			<main id="homepage" className="mx-auto">
				<div className="mb-20" id="hero-banner">
					<div className="px-10 lg:px-20">
						<h1 id="main-title" className="text-7xl lg:text-9xl mt-20">
							Hello
							<br/>
							World
						</h1>
					</div>
					<div>1 2 3</div>
					<div>
						<button class="btn-round">
							<VscChevronDown />
						</button>
					</div>
				</div>
				<div id="bloc-map" class="grid grid-cols-12 gap-5 container">
					<div className="col-start-2 col-span-10 bg-white rounded-3xl overflow-hidden mb-10 mx-auto">
						<div className="p-5 sm:p-9 md:p-7 xl:p-9 text-center">
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
					
					<button className="col-start-2 col-span-10 btn btn-dark mx-auto my-5">
						<span className="btn-text">Mon passeport</span>
					</button>
				</div>
				<div id="bloc-popular" className="my-10 md:my-20 py-10">
					<div className="title-container">
						<h2>Destinations populaires</h2>
					</div>
					<div className="mx-auto my-10 container">
						<div class="grid grid-cols-9 gap-9 container">
							<DestinationCard 
								title="Rome" country="Italie" link="/roma" img="rome.png" />
							<DestinationCard 
								title="New York" country="Etats-Unis" link="/new-york" img="new-york.png" />
							<DestinationCard 
								title="Tahunanui" country="Nouvelle Zélande" link="/new-zealand" img="new-zealand.png" />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default HomePage