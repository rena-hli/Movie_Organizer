import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFavSelector } from "../../redux-manager/movie-item/selector";
import "./ListPage.css";

function ListPage() {
  const params = useParams();
  const favorites = useSelector(getFavSelector);

  useEffect(() => {
    console.log(params.id);

    // dispatch from UI -> saga -> redux -> dispatch from UI
  });

  return (
    <div className="list-page">
      <h1 className="list-page__title">Мой список</h1>
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
