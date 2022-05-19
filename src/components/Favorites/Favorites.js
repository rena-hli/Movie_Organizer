import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getFavSelector } from "../../redux-manager/movie-item/selector";
import "./Favorites.css";

function Favorites() {
  // const [title, setTitle] = useState("Новый список");
  const [favoriteInput, setFavoriteInput] = useState("");

  const favorites = useSelector(getFavSelector);

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
        {favorites.map((item, imdbID) => {
          return (
            <li key={imdbID}>
              {item.Title} ({item.Year})
              <button>X</button>
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
