
/** Routes **/
import authRoutes from "@/router/authRoutes";
import passportRoutes from "@/router/passportRoutes";
import voyageRoutes from "@/router/voyageRoutes";

/** Pages **/
import HomePage from "../pages/public/Home";
import InteractiveMap from "../pages/public/InteractiveMap";
import FeedPage from "../pages/Feed/Feed";
import ProfilePage from "@/pages/Profile/Profile";
import NotFoundPage from "@/pages/public/NotFound";

const globalRoutes = [
	{ path: '*', element: <NotFoundPage />, authRequired: false },
	{ path: '/', element: <HomePage />, authRequired: false },
	{ path: '/map', element: <InteractiveMap />, authRequired: false },
	{ path: '/feed', element: <FeedPage />, authRequired: true },
	{ path: '/profile/:uuid', element: <ProfilePage />, authRequired: false },
]

const routes = globalRoutes.concat(
	authRoutes,
	passportRoutes,
	voyageRoutes
);

export default routes;
