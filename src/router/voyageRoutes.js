
/** Pages **/
import VoyagePage from "@/pages/Voyage/Voyage";
import VoyageEditPage from "@/pages/Voyage/VoyageEdit";
import VoyageStepPage from "@/pages/Voyage/VoyageStep";
import VoyageStepEditPage from "@/pages/Voyage/VoyageStepEdit";
import VoyageAlbumPage from "@/pages/Voyage/VoyageAlbum";
import VoyageListPage from "@/pages/Voyage/VoyageList";

const routes = [
	{ path: '/voyage/new', element: <VoyageEditPage /> },
	{ path: '/voyage/list', element: <VoyageListPage /> },
	{ path: '/voyage/:voyageId', element: <VoyagePage /> },
	{ path: '/voyage/edit/:voyageId', element: <VoyageEditPage /> },
	{ path: '/voyage/step/:voyageId', element: <VoyageStepPage /> },
	{ path: '/voyage/step/:voyageId/:stepId', element: <VoyageStepEditPage /> },
	{ path: '/voyage/album/:voyageId', element: <VoyageAlbumPage /> },
	{ path: '/voyage/album/:voyageId/:stepId', element: <VoyageAlbumPage /> }
];

export default routes;