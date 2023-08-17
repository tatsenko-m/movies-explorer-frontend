import { URL_MAIN } from "../constants/config";
import { URL_NOMOREPARTIES } from "../constants/config";
import { createHeaders } from "./headers";

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return res.json().then((data) => {
      const error = new Error(data.message || `Ошибка: ${res.status}`);
      error.status = res.status;
      throw error;
    });
  }

  setHeaders(headers) {
    this._headers = headers;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  setUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${URL_NOMOREPARTIES}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${URL_NOMOREPARTIES}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then(this._handleResponse);
  }

  deleteMovie(movieDBId) {
    return fetch(`${this._baseUrl}/movies/${movieDBId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then(this._handleResponse);
  }

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: URL_MAIN,
  headers: createHeaders(),
});

export default mainApi;
