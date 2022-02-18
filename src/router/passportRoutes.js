
/** Pages **/
import PassportPage from "@/pages/Passport/Passport";
import PassportEditPage from "@/pages/Passport/PassportEdit";

const routes = [
	{ path: 'passport', element: <PassportPage /> },
	{ path: 'passport/edit', element: <PassportEditPage /> }
];

export default routes;