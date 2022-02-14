
/** Routes **/
import authRoutes from "@/router/authRoutes";
import userRoutes from "@/router/userRoutes";

/** Pages **/
import HomePage from "../pages/Home/Home";

const globalRoutes = [
	{ path: '/', element: <HomePage /> }
]

const routes = globalRoutes.concat(
	authRoutes,
	userRoutes
);

export default routes;