import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState(""); // State to track input field value

  const handleSubmit = (e) => {
    // TODO: Write code to handle form submission
    e.preventDefault(); // Prevent default form submission
    if (!title.trim()) {
      alert("Please enter a valid title.")
      return;
    };

    const newMovie = {
      id: Date.now(),
      title,
      packed: false,
      color: "#ffffff",
    };

    onAddMovie(newMovie);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: Add an input field for the movie title */}
      <input
        type="text"
        placeholder="Movie Title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* TODO: Add a button to submit the form */}
      <button type="submit">Add Movie</button>
    </form>
  );
}
