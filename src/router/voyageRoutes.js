
/** Pages **/
import VoyagePage from "@/pages/Voyage/Voyage";
import VoyageEditPage from "@/pages/Voyage/VoyageEdit";
import VoyageStepPage from "@/pages/Voyage/VoyageStep";
import VoyageStepEditPage from "@/pages/Voyage/VoyageStepEdit";
import VoyageAlbumPage from "@/pages/Voyage/VoyageAlbum";
import VoyageListPage from "@/pages/Voyage/VoyageList";
import VoyageWishlistPage from "@/pages/Voyage/VoyageWishlist";

const routes = [
	{ path: '/voyage/new', element: <VoyageEditPage />, authRequired: true },
	{ path: '/voyage/list', element: <VoyageListPage />, authRequired: false },
	{ path: '/voyage/wishlist', element: <VoyageWishlistPage />, authRequired: true },
	{ path: '/voyage/:voyageId', element: <VoyagePage />, authRequired: false },
	{ path: '/voyage/edit/:voyageId', element: <VoyageEditPage />, authRequired: true },
	{ path: '/voyage/step/:voyageId', element: <VoyageStepPage />, authRequired: false },
	{ path: '/voyage/step/:voyageId/:stepId', element: <VoyageStepEditPage />, authRequired: false },
	{ path: '/voyage/album/:voyageId', element: <VoyageAlbumPage />, authRequired: false },
	{ path: '/voyage/album/:voyageId/:stepId', element: <VoyageAlbumPage />, authRequired: false }
];

export default routes;