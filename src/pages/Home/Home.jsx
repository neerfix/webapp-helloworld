import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DestinationCard from '@/components/DestinationCard'

// Images
import HeroBannerImg from '@/assets/images/homepage/hero-banner.jpg';

const HomePage = () => {
	return (
		<div>
			<Header />
			<main id="homepage">
				<div className="bloc">
					<h1 id="main-title">HelloWorld</h1>
					<img height="1000" id="main-img" src={HeroBannerImg} alt="" />
				</div>
				<div className="bloc">
					Découvrir le monde
				</div>
				<div>
					<h3>Destination populaires</h3>
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