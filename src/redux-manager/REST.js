export const fetchMovies = async (payload) => {
  const response = await fetch(`http://www.omdbapi.com/?s=${payload}&apikey=730b0d5a`);
  const data = await response.json();

  return data;
};

export const sendFavorites = async (favoritListName, filmList) => {
  const info = {
    title: favoritListName,
    movies: filmList,
  };

  const response = await fetch(
    "https://acb-api.algoritmika.org/api/movies/list",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(info),
    }
  );

  const data = await response.json();

  return data;
};

export const getFavoritesList = async (payload) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${payload}&apikey=b14a1940`
  );
  const data = await response.json();

  return data;
};

