
/** Pages **/
import VoyagePage from "@/pages/Voyage/Voyage";
import VoyageEditPage from "@/pages/Voyage/VoyageEdit";

const routes = [
	{ path: '/voyage/:id_voyage', element: <VoyagePage /> },
	{ path: '/voyage/edit/:id_voyage', element: <VoyageEditPage /> }
];

export default routes;