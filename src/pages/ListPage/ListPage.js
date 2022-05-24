import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFavSelector } from "../../redux-manager/movie-item/selector";
import { saveFavAction } from "../../redux-manager/movie-item/actions";
import "./ListPage.css";

function ListPage() {
  const params = useParams();
  const favorites = useSelector(getFavSelector);
  const favoritesTitle = useSelector(saveFavAction);

  return (
    <div className="list-page">
      <h1 className="list-page__title">{favoritesTitle.payload}</h1>
      <ul>
        {favorites.map((item) => {
          return (
            <li key={item.imdbID}>
              <a
                href={`https://www.imdb.com/title/${item.imdbID}/`}
                target="_blank"
              >
                {item.Title} ({item.Year})
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListPage;
