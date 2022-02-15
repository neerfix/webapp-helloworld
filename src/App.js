// React-Router && React-Router-DOM
import { Routes } from "react-router";
import { Route } from "react-router-dom";

// Routes list
import routes from "@/router/routes";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const App = () => {
	return (
		<main className="App">
			<Header />
			<Routes>
				{routes.map((route, key) => (
					<Route key={key} exact path={route.path} element={route.element} />
				))}
			</Routes>
			<Footer />
		</main>
	);
}

export default App;
