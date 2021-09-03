import { request } from "./base";

const API = 'http://159.65.126.180/api/';
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};
const baseRequest = (body, slug) => ({ API, method: 'POST', body: JSON.stringify(body), headers, slug });

export const login = (body) => request(baseRequest(body, 'auth/login'));
export const register = (body) => request(baseRequest(body, 'register'));
export const checkUser = (body) => request(baseRequest(body, 'auth/me'));
export const userUpdate = (body, id) => request(baseRequest(body, `users/${id}/update`));
