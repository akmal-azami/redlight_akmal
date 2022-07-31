import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import React from "react";
require("dotenv").config();

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

//movie/popular?api_key=<<api_key>>&language=en-US&page=1

export const tmdbApi = createApi({
	reducerPath: "tmdbApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
	endpoints: (builder) => ({
		//*Get Genres
		getGenres: builder.query({
			query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
		}),

		//* Get Moveis by [Type]
		getMovies: builder.query({
			query: ({ genreIdOrCategoryName, page }) => {
				//popular, top_rated, upcoming -> string  // Ger Movies by Category
				if (genreIdOrCategoryName && typeof genreIdOrCategoryName === "string") {
					return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
					console.log(genreIdOrCategoryName);
				}
				//12, 15, 16 // Get Movies by Genre
				if (genreIdOrCategoryName && typeof genreIdOrCategoryName === "number") {
					return `discover/movie?with_genres=${genreIdOrCategoryName}page=${page}&api_key=${tmdbApiKey}`;
					console.log(genreIdOrCategoryName);
				}

				// Get Popular Movies
				return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
			},
		}),
	}),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;

// const fetxhData = async () =>{
// 	const data = fetch (
// 		'https://api.themoviedb.org/3/movie/76341?api_key=${tmdbApiKey}'
// 		)
// 		const movies = await data.json()
// 		console.log('--->', movies)
// }

// React.useEffect(()=>{
// 	fetxhData()
// },[])
