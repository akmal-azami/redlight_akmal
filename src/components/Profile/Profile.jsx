import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, Button, Box } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { userSelector } from "../../features/auth";
import { useGetListQuery } from "../../services/TMDB";
import RatedCards from "./../RatedCards/RatedCards";

const Profile = () => {
	const { user } = useSelector(userSelector);
	const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
		listName: "favorite/movies",
		accountId: user.id,
		sessionId: localStorage.getItem("session_id"),
		page: 1,
	});
	const { data: watchlistMovies, refetch: refetchWatchlisted } = useGetListQuery(
		{
			listName: "watchlist/movies",
			accountId: user.id,
			sessionId: localStorage.getItem("session_id"),
			page: 1,
		}
	);

	useEffect(() => {
		refetchFavorites();
		refetchWatchlisted();
	}, []);

	console.log(user, "Profile - user");

	const logout = () => {
		localStorage.clear();
		window.location.href = "/";
	};

	return (
		<Box>
			<Box display="flex" justifyContent="space-between">
				<Typography variant="h4" gutterBottom>
					{" "}
					My profile
				</Typography>
				<Button color="inherit" onClick={logout}>
					Logout &nbsp; <ExitToApp />
				</Button>
			</Box>
			{!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
				<Typography variant="h5">
					Add favourite or watchlist some movies to see the here!
				</Typography>
			) : (
				<Box>
					{" "}
					<RatedCards title="Favourite Movies" data={favoriteMovies} />
					<RatedCards title="Watchlist" data={watchlistMovies} />
				</Box>
			)}
		</Box>
	);
};

export default Profile;
