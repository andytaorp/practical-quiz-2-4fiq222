import React from "react";

export default function Movie({ movie, onToggleWatched, onDeleteMovie }) {
  return (
    <li>
      {/* Checkbox to toggle the 'watched' status */}
      <input
        type="checkbox"
        checked={movie.watched}
        onChange={() => onToggleWatched(movie.id)}
      />
      {/* Span to display the movie title with conditional styling */}
      <span
        style={{
          textDecoration: movie.watched ? "line-through" : "none",
        }}
      >
        {movie.title}
      </span>
      {/* Button to delete the movie */}
      <button onClick={() => onDeleteMovie(movie.id)}>Delete</button>
    </li>
  );
}
