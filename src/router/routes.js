
/** Routes **/
import authRoutes from "@/router/authRoutes";
import passportRoutes from "@/router/passportRoutes";

/** Pages **/
import HomePage from "../pages/public/Home";
import FeedPage from "../pages/Feed/Feed";

const globalRoutes = [
	{ path: '/', element: <HomePage /> },
	{ path: '/feed', element: <FeedPage /> }
]

const routes = globalRoutes.concat(
	authRoutes,
	passportRoutes
);

export default routes;