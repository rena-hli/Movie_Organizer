import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavSelector } from "../../redux-manager/movie-item/selector";
import "./Favorites.css";
import { deleteFavAction } from "../../redux-manager/movie-item/actions";
import { Link } from "react-router-dom";

function Favorites() {
  const [title, setTitle] = useState("");

  const [isClicked, setClicked] = useState(false);

  const favorites = useSelector(getFavSelector);

  const getInput = (e) => {
    setTitle(e.target.value);
  };

  const saveFavMovie = () => {
    setClicked(true);
  };

  const dispatch = useDispatch();

  const deleteMovie = (e) => {
    dispatch(deleteFavAction(e.target.id));
  };

  return (
    <div className="favorites">
      <input
        placeholder="Новый список"
        className="favorites__name"
        onChange={getInput}
      />
      <ul className="favorites__list">
        {favorites.map((item) => {
          return (
            <li key={item.imdbID}>
              {item.Title} ({item.Year})
              <button
                onClick={deleteMovie}
                id={item.imdbID}
                className="delete-button"
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      {isClicked ? (
        <Link to="/list/:id">Перейти к списку</Link>
      ) : (
        <button
          type="button"
          className={`favorites__save ${
            !(title && favorites[0]) && "disabled"
          }`}
          onClick={saveFavMovie}
          disabled={!(title && favorites[0])}
        >
          Сохранить список
        </button>
      )}
    </div>
  );
}

export default Favorites;
