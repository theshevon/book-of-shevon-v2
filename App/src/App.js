import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route 
} from "react-router-dom";

import Projects from "./pages/Projects";
import YouTube  from "./pages/YouTube";
import Photog   from "./pages/Photog";
import About    from "./pages/About";
import Error    from "./pages/Error";
import Blog     from "./pages/Blog";
import Home     from "./pages/Home";
import Art      from "./pages/Art";

import Navbar from "./components/Navbar/MainNavBar";
// import Footer from "./components/Footer";

import "./App.css";

const App = () => {

		return (
			<Router>

				<Navbar/>

				<Switch>

					{/* landing page */}
					<Route
						exact
						path="/"
						component={ Home }>
					</Route>

					{/* projects page */}
                    <Route
						exact
						path="/projects"
						component={ Projects }/>

                    {/* photography page */}
                    <Route
						exact
						path="/photog"
						component={ Photog }/>

					{/* music page */}
					<Route
						exact
						path="/youtube"
						component={ YouTube }/>

					{/* about page */}
					<Route
						exact
						path="/about"
						component={ About }/>

					{/* blog page */}
					<Route
						exact
						path="/blog"
						component={ Blog }/>

					{/* art page */}
					<Route
						exact
						path="/art"
						component={ Art }/>

					{/* error page */}
					<Route
                        path="/*"
						component={ Error }/>

				</Switch>

				{/* <Footer /> */}

			</Router>
		)
}

export default App;