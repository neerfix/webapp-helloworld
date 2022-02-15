import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DestinationCard from '@/components/DestinationCard'

const HomePage = () => {
	return (
		<div>
			<Header />
			<main className="homepage">
				<div>
					HelloWorld
				</div>
				<div>
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