// React-Router && React-Router-DOM
import { Routes } from "react-router";
import { Route } from "react-router-dom";

// Routes list
import routes from "@/router/routes";

const App = () => {
	return (
		<div className="App">
			<Routes>
				{routes.map((route, key) => (
					<Route key={key} exact path={route.path} element={route.element} />
				))}
			</Routes>
		</div>
	);
}

export default App;
