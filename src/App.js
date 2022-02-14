
import { Routes, Route } from "react-router-dom";

import routes from "@/router/routes";

const App = () => {

	return (
		<div className="App">
			<Routes>
				{routes.map((route, key) => (
					<Route key={key} path={route.path} element={route.element} />
				))}
			</Routes>
		</div>
	);
}

export default App;
