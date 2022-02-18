
/** Routes **/
import authRoutes from "@/router/authRoutes";
import passportRoutes from "@/router/passportRoutes";

/** Pages **/
import HomePage from "../pages/public/Home";
import InteractiveMap from "../pages/public/InteractiveMap";

const globalRoutes = [
	{ path: '/', element: <HomePage /> },
	{ path: '/map', element: <InteractiveMap /> }
]

const routes = globalRoutes.concat(
	authRoutes,
	passportRoutes
);

export default routes;