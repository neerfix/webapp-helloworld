
/** Routes **/
import authRoutes from "@/router/authRoutes";
import userRoutes from "@/router/userRoutes";

/** Pages **/
import HomePage from "../pages/public/Home";

const globalRoutes = [
	{ path: '/', element: <HomePage /> }
]

const routes = globalRoutes.concat(
	authRoutes,
	userRoutes
);

export default routes;