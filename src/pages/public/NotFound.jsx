import { useState } from "react";

// Style
import '@/assets/styles/scss/pages/error.scss';

// Icones
import {AiOutlineSearch} from "react-icons/ai";

const NotFound = () => {

   const [search, setSearch] = useState("");

    return (
        <div id="notfoundpage" className='bg-beige relative'>
            <img alt="" className="notfound-image" src="/images/404-image.jpg" />
            <div className="my-20 ml-10 mr-auto notfound-content">
                <h1 className="text-white text-6xl mb-5">
                    Vous vous êtes égaré ?
                </h1>
                <h2 className="text-beige text-3xl">
                    Retrouvez votre chemin
                </h2>
                <div className="mt-10 mb-20 input-container">
                    <input type="text" className="input-field px-5 py-2" name="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher un voyage, un lieu..." />
                    <a title="Retrouver son chemin" href={"/map?search=" + search }>
                        <button className={"btn btn-icon py-2"} type={"button"}>
                            <AiOutlineSearch />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NotFound