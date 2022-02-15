import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DestinationCard from '@/components/DestinationCard'

// Images
import HeroBannerImg from '@/assets/images/homepage/hero-banner.jpg';
import PlanetEarthImg from '@/assets/images/homepage/planet-earth.png';

const HomePage = () => {
	return (
		<div>
			<Header />
			<main id="homepage" className="container">
				<div className="min-h-screen grid grid-flow-col">
					<div className="px-20">
						<h1 id="main-title" className="text-7xl lg:text-9xl mt-20">
							Hello
							<br/>
							World
						</h1>
					</div>
					<img height="1000" id="main-img" src={HeroBannerImg} alt="" />
				</div>
				<div className="w-full">
					<div class="bg-white rounded-lg overflow-hidden mb-10 w-1/2 mx-auto">
						<div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
							<div className="title-centered">
								<h2>
									Carte des voyages
								</h2>
							</div>
							<button className="btn mx-auto my-5">
								<span class="btn-text">Parcourir le monde</span>
							</button>
						</div>
						<div className="earth-visual">
							<img src={PlanetEarthImg} alt="" class="w-full" />
						</div>
					</div>
				</div>
				<div>
					<div className="title-container">
						<h2>Destinations populaires</h2>
					</div>
					<DestinationCard 
						title="Rome" country="Italie" link="/roma" img="https://picsum.photos/id/123/145/145" />
					<DestinationCard 
						title="New York" country="Etats-Unis" link="/new-york" img="https://picsum.photos/id/115/145/145" />
					<DestinationCard 
						title="Tahunanui" country="Nouvelle Zélande" link="/new-zealand" img="https://picsum.photos/id/175/145/145" />
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default HomePage