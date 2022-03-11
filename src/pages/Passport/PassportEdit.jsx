
import { useEffect, useState } from "react";

const PassportEditPage = () => {
	const [profile, setProfile] = useState({
		pseudo: "",
		birthdate: "",
		email: "",
		about: "",
		facebook: "",
		instagram: "",
		twitter: "",
		youtube: "",
	});
	
	const [visibility, setVisibility] = useState(0);
	const [albumSpotlight, setAlbumSpotlight] = useState(0);
	
	/*** React hooks ***/
	
	useEffect(() => {
		// TODO: Call Api to get profile information
	});
	
	/*** Custom functions ***/
	
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
		
		// TODO: Call api to save profile modification
		console.log(payload);
	};
	
	return (
		<div id={"passportpage"} className={"bg-white"}>
			
			<div className="voyage-img absolute top-0">
				<img src="https://images.unsplash.com/photo-1574410206732-0000dbcb116d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80" alt="" className="w-full" />
			</div>
			
			<div className="compass" />
			
			<div className="container mx-auto">
				<div className="passport-card relative rounded-xl shadow bg-white mx-5 pt-5 mb-10">
					
					<div className={"w-full pb-5"}>
						<h2 className="text-xl tracking-widest text-brown text-center">◆&nbsp;Éditer mon Passeport&nbsp;◆</h2>
					</div>
					
					<div className={"bg-beige py-10 px-6 rounded-md"}>
						<div className={"mx-auto"}>
							<form onSubmit={saveProfile} className={"min-w-[450px] md:min-w-[600px] lg:min-w-[750px]"}>
								<div className={"flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-10"}>
									<div className={"form-field"}>
										<label>Pseudonyme</label>
										<input
											type={"text"}
											name={"pseudo"}
											value={profile.pseudo}
											required
											className={"focus:border-dark-brown focus:ring-dark-brown"}
											onChange={(e) => handleChange(e)}
										/>
									</div>
									<div className={"form-field"}>
										<label>Date de naissance</label>
										<input
											type={"date"}
											name={"birthdate"}
											value={profile.birthdate}
											required
											className={"focus:border-dark-brown focus:ring-dark-brown"}
											onChange={(e) => handleChange(e)}
										/>
									</div>
								</div>
								<div className={"flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-10 mt-6"}>
									<div className={"form-field"}>
										<label>Adresse mail</label>
										<input
											type={"email"}
											name={"email"}
											value={profile.email}
											required
											onChange={(e) => handleChange(e)}
										/>
									</div>
								</div>
								<div className={"divider"} />
								<div className={"flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-10 mt-4"}>
									<div className={"form-field"}>
										<label>Lien Facebook</label>
										<input
											type={"text"}
											name={"facebook"}
											value={profile.facebook}
											onChange={(e) => handleChange(e)}
										/>
									</div>
								</div>
								<div className={"flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-10 mt-6"}>
									<div className={"form-field"}>
										<label>Lien Instagram</label>
										<input
											type={"text"}
											name={"instagram"}
											value={profile.instagram}
											onChange={(e) => handleChange(e)}
										/>
									</div>
								</div>
								<div className={"flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-10 mt-6"}>
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
								<div className={"flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-10 mt-6"}>
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
								<div className={"divider"} />
								<div className={"flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-10 mt-6"}>
									<div className={"form-field col-span-7 col-start-2"}>
										<label>Visibilité du profil</label>
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
								<div className={"divider"} />
								<div className={"flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-10 mt-6"}>
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
								<button className={"btn btn-dark mx-auto mt-10"} type={"submit"}>
									<span className={"btn-text"}>Sauvegarder</span>
								</button>
							</form>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default PassportEditPage;
