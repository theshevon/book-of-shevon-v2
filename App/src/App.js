import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route 
} from "react-router-dom";

import { Home } from './pages/home/home';
import { createNavbar } from './ui/navbar/create';

// import Footer from "./components/Footer";

// import "./App.css";
const App = () => {

		// TODO: replace this with actual link
		const Navbar = createNavbar({ activeRoute: '/' });

		return (
			<Router>
				{ Navbar }
				<Switch>
					<Route
						exact
						path="/"
						component={ Home }>
					</Route>
				</Switch>
			</Router>
		)
}

export default App;