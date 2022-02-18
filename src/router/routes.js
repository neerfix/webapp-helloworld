
/** Routes **/
import authRoutes from "@/router/authRoutes";
import passportRoutes from "@/router/passportRoutes";

/** Pages **/
import HomePage from "../pages/public/Home";

const globalRoutes = [
	{ path: '/', element: <HomePage /> }
]

const routes = globalRoutes.concat(
	authRoutes,
	passportRoutes
);

export default routes;