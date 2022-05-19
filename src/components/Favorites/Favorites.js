import React, { useState } from "react";
import "./Favorites.css";

function Favorites() {
  // const [title, setTitle] = useState("Новый список");
  const [movies, setMovies] = useState([]);
  const [favoriteInput, setFavoriteInput] = useState("");

  const getInput = (e) => {
    setFavoriteInput(e.target.value);
  };

  return (
    <div className="favorites">
      <input
        value={favoriteInput}
        placeholder="Новый список"
        className="favorites__name"
        onChange={getInput}
      />
      <ul className="favorites__list">
        {movies.map((item, i) => {
          return (
            <li key={i}>
              {item.title} ({item.year})
            </li>
          );
        })}
      </ul>
      <button type="button" className="favorites__save">
        Сохранить список
      </button>
    </div>
  );
}

export default Favorites;
