import { useState } from "react";

import banner from "@/assets/images/homepage/hero-banner.jpg";

const PassportPage = () => {
	const [profile, setProfile] = useState({
		pseudo: "",
		email: "",
		phone: "",
		about: "",
		facebook: "",
		instagram: "",
		twitter: "",
		youtube: "",
	});
	
	const [visibility, setVisibility] = useState(0);
	const [albumSpotlight, setAlbumSpotlight] = useState(0);
	
	const handleChange = (event) => {
		setProfile({
			...profile,
			[event.target.name]: event.target.value,
		});
	};
	
	const saveProfile = (event) => {
		event.preventDefault();
		
		const payload = {
			...profile,
			visibility: visibility,
			albumSpotlight: albumSpotlight,
		};
		
		console.log(payload);
	};
	
	return (
		<div id={"passport"} className={"mx-auto"}>
			<div className={"w-full"}>
				<div className="title-container">
					<h2>Passeport</h2>
				</div>
				<div className={"relative min-h-[400px]"}>
					<img
						src={banner}
						alt={"avatar"}
						className={"absolute top-0 left-0 h-full w-full"}
					/>
				</div>
			</div>
			<div className={"bg-beige py-10"}>
				<form onSubmit={saveProfile}>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Pseudonyme</label>
							<input
								type={"text"}
								name={"pseudo"}
								value={profile.pseudo}
								className={"focus:ring-dark-brown focus:border-dark-brown"}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Adresse email</label>
							<input
								type={"text"}
								name={"email"}
								value={profile.email}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className={"grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Numéro de téléphone</label>
							<input
								type={"text"}
								name={"phone"}
								value={profile.email}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className={"divider"}></div>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Lien Facebook</label>
							<input
								type={"text"}
								name={"facebook"}
								value={profile.facebook}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Lien Instagram</label>
							<input
								type={"text"}
								name={"instagram"}
								value={profile.instagram}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className={"mb-4 grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Lien Twitter</label>
							<input
								type={"text"}
								name={"twitter"}
								value={profile.twitter}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className={"grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Lien YouTube</label>
							<input
								type={"text"}
								name={"youtube"}
								value={profile.youtube}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className={"divider"}></div>
					<div className={"grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Visibilité</label>
							<select
								value={visibility}
								onChange={(e) => setVisibility(e.target.value)}
							>
								<option value={0}>Privé</option>
								<option value={1}>Amis seulement</option>
								<option value={2}>Public</option>
							</select>
						</div>
					</div>
					<div className={"divider"}></div>
					<div className={"grid grid-cols-9 gap-4"}>
						<div className={"form-field col-span-7 col-start-2"}>
							<label>Album mis en avant</label>
							<select
								value={albumSpotlight}
								onChange={(e) => setAlbumSpotlight(e.target.value)}
							>
								<option value={0}>Album 0</option>
								<option value={1}>Album 1</option>
								<option value={2}>Album 2</option>
								<option value={3}>Album 3</option>
							</select>
						</div>
					</div>
					<button className={"btn btn-dark mx-auto my-5"} type={"submit"}>
						<span className={"btn-text"}>Sauvegarder</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default PassportPage;
