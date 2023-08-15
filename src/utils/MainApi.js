import { URL_MAIN } from "../constants/constants";

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = (name, email, password) => {
  return fetch(`${URL_MAIN}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(handleResponse);
};

export const authorize = (email, password) => {
  return fetch(`${URL_MAIN}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};

// export const getContent = (token) => {
//   return fetch(`${URL_MAIN}/users/me`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   }).then(handleResponse);
// };
