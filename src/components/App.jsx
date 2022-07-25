import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import { Actors, MovieInformation, Movies, NavBar, Profile } from "./";
import useStyles from "./styles";

const App = () => {
	const classes = useStyles();

	return (
		<div className="classes.root">
			<CssBaseline />
			<NavBar />
			<main className="classes.content">
				<div className="classes.toolbar" />
				<Switch>
					{" "}
					{/* Only one route will be visible at the time */}
					<Route exact path="/">
						<h1>Home</h1>
					</Route>
					<Route exact path="/movies">
						<Movies />
					</Route>
					<Route exact path="/movies/:id">
						<MovieInformation />
					</Route>
					<Route exact path="/actors/:id">
						<Actors />
					</Route>
					<Route exact path="/profile/:id">
						<Profile />
					</Route>
				</Switch>
			</main>
		</div>
	);
};

export default App;
