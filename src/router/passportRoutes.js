
/** Pages **/
import PassportPage from "@/pages/Passport/Passport";
import PassportEditPage from "@/pages/Passport/PassportEdit";
import PassportFriends from "@/pages/Passport/PassportFriends";

const routes = [
	{ path: 'passport', element: <PassportPage /> },
	{ path: 'passport/:userId', element: <PassportPage /> },
	{ path: 'passport/edit', element: <PassportEditPage /> },
	{ path: 'passport/friends', element: <PassportFriends /> }
];

export default routes;