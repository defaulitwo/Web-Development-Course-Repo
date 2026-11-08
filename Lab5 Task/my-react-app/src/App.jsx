
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  function addMovie(e) {
    e.preventDefault();

    if (!title.trim()) return;

    const newMovie = {
      id: Date.now(),
      title: title.trim(),
      review: review.trim(),
      rating: rating
    };

    setMovies([...movies, newMovie]);

    setTitle("");
    setReview("");
    setRating(0);
  }

  function removeMovie(id) {
    setMovies(movies.filter(movie => movie.id !== id));
  }

  return (
    <div className="app">
      <header>
        <h1>🎬 My Movie Watchlist</h1>
        <p>Keep track of the movies you've watched!</p>
      </header>

      <form className="movie-form" onSubmit={addMovie}>
        <h2>Add a Movie</h2>

        <input
          type="text"
          placeholder="Movie title..."
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={e => setReview(e.target.value)}
        />

        <div className="rating-input">
          <span>Your rating: </span>

          {[1, 2, 3, 4, 5].map(star => (
            <button
              key={star}
              type="button"
              className="star-button"
              onClick={() => setRating(star)}
            >
              {star <= rating ? "⭐" : "☆"}
            </button>
          ))}
        </div>

        <button type="submit" className="add-button">
          Add Movie
        </button>
      </form>

      <section className="watchlist">
        <h2>My Movies ({movies.length})</h2>

        {movies.length === 0 ? (
          <p className="empty">No movies added yet. Start watching!</p>
        ) : (
          <div className="movie-list">
            {movies.map(movie => (
              <div className="movie-card" key={movie.id}>
                <div className="movie-info">
                  <h3>{movie.title}</h3>

                  <div className="movie-rating">
                    {movie.rating > 0
                      ? "⭐".repeat(movie.rating)
                      : "Not rated"}
                  </div>

                  <p>
                    {movie.review || "No review added."}
                  </p>
                </div>

                <button
                  className="remove-button"
                  onClick={() => removeMovie(movie.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
