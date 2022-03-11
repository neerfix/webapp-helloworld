
/** Pages **/
import PassportPage from "@/pages/Passport/Passport";
import PassportEditPage from "@/pages/Passport/PassportEdit";
import PassportFriends from "@/pages/Passport/PassportFriends";

const routes = [
	{ path: 'passport', element: <PassportPage />, authRequired: false },
	{ path: 'passport/edit', element: <PassportEditPage />, authRequired: true },
	{ path: 'passport/friends', element: <PassportFriends />, authRequired: true }
];

export default routes;