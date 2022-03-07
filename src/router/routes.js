
/** Routes **/
import authRoutes from "@/router/authRoutes";
import passportRoutes from "@/router/passportRoutes";
import voyageRoutes from "@/router/voyageRoutes";

/** Pages **/
import HomePage from "../pages/public/Home";
import InteractiveMap from "../pages/public/InteractiveMap";
import FeedPage from "../pages/Feed/Feed";

const globalRoutes = [
	{ path: '/', element: <HomePage /> },
	{ path: '/map', element: <InteractiveMap /> },
	{ path: '/feed', element: <FeedPage /> }
]

const routes = globalRoutes.concat(
	authRoutes,
	passportRoutes,
	voyageRoutes
);

export default routes;
