export const fetchMovies = async (payload) => {
  const response = await fetch(`http://www.omdbapi.com/?s=${payload}&apikey=730b0d5a`);
  const data = await response.json();

  return data;
};
