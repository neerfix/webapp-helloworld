// Components
import FeedCard from '@/components/FeedCard'

const FeedPage = () => {
	return (
		<div className='bg-white'>
			<main id="feedpage" className="mx-auto">
				<div id="bloc-feed" className="md:mt-20 py-10">
					<div className="title-container">
						<h2>Fil d'actu</h2>
					</div>
					<div className="mx-auto my-10 container">
						<div className="mx-5">
							<FeedCard 
								title="Rome" country="Italie" link="/roma" img="rome.png" />
                            <FeedCard 
                                title="Rome" country="Italie" link="/roma" img="rome.png" />
                            <FeedCard 
                                title="Rome" country="Italie" link="/roma" img="rome.png" />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default FeedPage