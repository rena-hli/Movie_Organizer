import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getFavSelector } from "../../redux-manager/movie-item/selector";
import "./ListPage.css";

function ListPage() {
  const favorites = useSelector(getFavSelector);

  return (
    <div className="list-page">
      <h1 className="list-page__title">MY LIST</h1>
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
