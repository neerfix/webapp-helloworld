// Components
import DestinationCard from '@/components/DestinationCard'

// Icones
import {VscChevronDown} from 'react-icons/vsc';

// Images
import PlanetEarthImg from '@/assets/images/homepage/planet-earth.png';

const HomePage = () => {

	function scrollTo(id){
		var element = document.getElementById(id);

		window.scrollTo({
			top: element.offsetTop,
			left: 0,
			behavior: 'smooth'
		});
	}

	return (
		<div className='bg-beige'>
			<style
				dangerouslySetInnerHTML={{
					__html: `
					#header-container{
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						color: #f4e9dd;
					}

					#header-container .logo{
						fill: #f4e9dd;
					}

					#header-container .nav-link{
						color: #f4e9dd;
						font-weight: normal;
					}

					#header-container .nav-btn{
						color: #f4e9dd;
						font-weight: normal;
					}

					#header-container .nav-btn:hover{
						background: #f4e9dd;
						color: black;
						border-color: #f4e9dd;
					}

					#header-container .nav-link::after{
						background-color: #f4e9dd;
					}

					.separator{
						color: #f4e9dd;
					}

					#header{
						border-color: #e5d8cd;
					}
				`
				}}
			/>

			<div id="hero-video-container">
				<video autoPlay muted loop id="hero-video"
					src="/videos/video-hero-full.mp4">
				</video>
			</div>
			
			<div id="homepage">
				<div className="mb-20" id="hero-banner">
					<div className="px-10 lg:px-20">
						<h1 id="main-title" className="mt-20">
							<span className="text-8xl lg:text-9xl first-title">Hello</span>
							<br />
							<span className="sub-title">World</span>
						</h1>
					</div>
					<div className="diamond-decoration flex justify-center items-center mt-20 mb-10">
						<span className="diamond">◆</span>
						<span className="diamond mx-10">◆</span>
						<span className="diamond">◆</span>
					</div>
					<div className="relative my-20 w-full">
						<button className="btn-round mx-auto" onClick={() => scrollTo('bloc-map')}>
							<VscChevronDown />
						</button>
					</div>
				</div>
				<div id="bloc-map" className="grid grid-cols-12">
					<div className="col-start-2 col-span-10 bg-white rounded-3xl overflow-hidden shadow mb-10">
						<div className="p-5 sm:p-9 md:p-7 xl:p-9 text-center">
							<div className="title-centered">
								<h2 className='h2'>
									Carte des voyages
								</h2>
							</div>
							<a className="btn bg-beige mx-auto my-5 w-max" href="/map">
								<span className="btn-text">Parcourir le monde</span>
							</a>
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

					<div className="col-start-2 col-span-10 mb-5">
						<p className="text-center">
							HelloWorld est une application de carnet de voyage en ligne. 
							<b>Complètement gratuit</b>, tu peux personnaliser ton passeport et partager ton carnet de voyage aux autres aventuriers.
							Le concept de HelloWorld est de permettre à tout voyageur de <b>raconter un voyage ou une aventure</b>, que ce soit un road trip, un voyage de noces, des vacances, un trek, une balade, une randonnée…
							<br /><br />
							<b>Le carnet de voyage en ligne permet de garder des souvenirs durables de ses voyages.</b>
						</p>
					</div>
					
					<button className="col-start-2 col-span-10 btn btn-dark mx-auto my-5">
						<span className="btn-text">Mon passeport</span>
					</button>
				</div>
				<div id="bloc-popular" className="mt-10 md:mt-20 py-10">
					<div className="title-container">
						<h2 className='h2'>Destinations populaires</h2>
					</div>
					<div className="mx-auto my-10 container">
						<div className="grid grid-cols-12 lg:mx-5">
							<DestinationCard 
								title="Rome" country="Italie" link="/map?search=rome" img="rome.png" />
							<DestinationCard 
								title="New York" country="Etats-Unis" link="/map?search=new-york" img="new-york.png" />
							<DestinationCard 
								title="Tahunanui" country="Nouvelle Zélande" link="/map?search=nouvelle-zelande-tahunanui" img="new-zealand.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage