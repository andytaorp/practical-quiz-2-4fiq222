import React from "react";
import Movie from "./Movie";

export default function MovieList({ movies, onToggleWatched, onDeleteMovie }) {
  return (
    <ul>
      {/* TODO: Map through the movies and render a Movie component for each */}
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          onToggleWatched={onToggleWatched}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </ul>
  );
}
