
/** Pages **/
import VoyagePage from "@/pages/Voyage/Voyage";
import VoyageEditPage from "@/pages/Voyage/VoyageEdit";
import VoyageStepPage from "@/pages/Voyage/VoyageStep";
import VoyageAlbumPage from "@/pages/Voyage/VoyageAlbum";

const routes = [
	{ path: '/voyage/:id_voyage', element: <VoyagePage /> },
	{ path: '/voyage/edit/:id_voyage', element: <VoyageEditPage /> },
	{ path: '/voyage/step/:id_voyage/:id_step', element: <VoyageStepPage /> },
	{ path: '/voyage/album/:id_voyage/:id_step', element: <VoyageAlbumPage /> }
];

export default routes;