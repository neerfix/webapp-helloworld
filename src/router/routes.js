
/** Routes **/
import authRoutes from "@/router/authRoutes";
import userRoutes from "@/router/userRoutes";

/** Pages **/
import HomePage from "../pages/public/Home";
import FeedPage from "../pages/auth/Feed";

const globalRoutes = [
	{ path: '/', element: <HomePage /> },
	{ path: '/feed', element: <FeedPage /> }
]

const routes = globalRoutes.concat(
	authRoutes,
	userRoutes
);

export default routes;