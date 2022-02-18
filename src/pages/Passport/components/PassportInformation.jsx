import PassportStatCard from "@/components/PassportStatCard";
import AlbumPreview from "@/components/AlbumPreview";

const PassportInformation = ({ description, album, statistics }) => {
	return (
		<>
			<p className={"my-14 text-[18px]"}>{description}</p>
			<div className={"divider"}></div>
			<h2 className={"subtitle"}>Album préféré</h2>
			<AlbumPreview album={album} />
			<div className={"divider"}></div>
			<h2 className={"subtitle"}>Statistiques</h2>
			<div className={"grid grid-cols-8 items-center"}>
				<PassportStatCard
					number={statistics.countries}
					title={"pays"}
					subtitle={"explorés"}
					className={"col-span-2"}
				/>
				<div className={"text-center text-brown"}>◆</div>
				<PassportStatCard
					number={statistics.cities}
					title={"villes"}
					subtitle={"visitées"}
					className={"col-span-2"}
				/>
				<div className={"text-center text-brown"}>◆</div>
				<PassportStatCard
					number={statistics.days}
					title={"jours"}
					subtitle={"voyagés"}
					className={"col-span-2"}
				/>
			</div>
		</>
	);
};

export default PassportInformation;
