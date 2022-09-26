export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "806f97ef1406917394d0c61ba8e3ddeb";
export const endpoint = "https://api.themoviedb.org/3/movie/";
export const imgLink = "https://image.tmdb.org/t/p/original/";
export const imgLinkSmall = "https://image.tmdb.org/t/p/w500/";
export const genreEndpoint =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=";
export const endpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdb = {
  getListMovie(type = "now_playing", page = 1) {
    return `${endpoint}${type}?api_key=${apiKey}&page=${page}`;
  },
  getMovieDetail(movieId) {
    return `${endpoint}${movieId}?api_key=${apiKey}`;
  },
  getImageOriginal(path) {
    return `${imgLink}${path}`;
  },
  getImage500(path) {
    return `${imgLinkSmall}${path}`;
  },
  getGenreList() {
    return `${genreEndpoint}${apiKey}`;
  },
  getMetaMovie(movieId, type) {
    return `${endpoint}${movieId}/${type}?api_key=${apiKey}`;
  },
  getListSearch(value, page) {
    return `${endpointSearch}?api_key=${apiKey}&query=${value}&page=${page}`;
  },
};
