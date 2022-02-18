// Icones
//import { VscChevronDown } from 'react-icons/vsc';
import Map from '@/components/Map'
import SearchBar from '@/components/SearchBar'

const InteractiveMap = () => {
	return (
		<div className='bg-beige'>
			<main id="interactive-map" className="w-full">
				<Map />
				<SearchBar />
			</main>
		</div>
	)
}

export default InteractiveMap
