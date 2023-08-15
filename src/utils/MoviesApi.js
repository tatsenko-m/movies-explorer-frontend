import { URL_MOVIES } from '../constants/constants';
class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: URL_MOVIES,
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;
