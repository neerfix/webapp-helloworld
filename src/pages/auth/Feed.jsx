// Components
import FeedCard from '@/components/FeedCard'

import '@/assets/styles/scss/pages/feed.scss';

const FeedPage = () => {
	return (
		<div className='bg-white'>
			<div id="feedpage" className="mx-auto">
				<div className="compass"></div>
				<div id="bloc-feed" className="md:mt-20 py-10">
					<div className="title-container">
						<h2>Fil d'actu</h2>
					</div>
					<div className="mx-auto my-10 container">
						<div className="mx-5" id="feed-list">
							<FeedCard 
								voyage="Voyage au Kazakhstan" step="Volcan de glace" date="13/02/2022" user="John Doe" travel_id="234533" 
								user_img="https://avatars.githubusercontent.com/u/6839576?v=4" voyage_img="https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Evoyage.2Egentside.2Ecom.2Fs3.2Ffrgsv.2Fvoyage.2Fdefault_2021-09-20_1e1c5d86-85d5-46f5-ae0c-6417ce620eac.2Epng/480x270/quality/80/espagne-les-images-du-volcan-cumbre-vieja-qui-rentre-en-eruption-sur-l-ile-de-la-palma.jpg" />
                            <FeedCard 
                                voyage="Les Alpes" step="Village de Balazuc" date="24/12/2021" user="Patrick" travel_id="234567" 
								user_img="https://avatars.githubusercontent.com/u/827205?v=4" voyage_img="https://sacavoyage.fr/wp-content/uploads/ALPES-EN-1-SEMAINE-1280x600.jpg" />
                            <FeedCard 
                                voyage="Roadtrip en Afrique" step="Etang à éléphants" date="30/09/2021"  user="Clement" travel_id="234799" 
								user_img="https://avatars.githubusercontent.com/u/671786?v=4" voyage_img="https://theroadtrippers.fr/wp-content/uploads/2017/10/Roadtrip-au-Maroc-en-Afrique-2.jpg" />
							<FeedCard 
                                voyage="Mon voyage au Japon" step="Mont Fuji-san" date="23/07/2021"  user="Emelicorne" travel_id="234799" 
								user_img="https://avatars.githubusercontent.com/u/56111791?v=4" voyage_img="https://theroadtrippers.fr/wp-content/uploads/2017/10/Roadtrip-au-Maroc-en-Afrique-2.jpg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FeedPage