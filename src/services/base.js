const API = 'https://fakestoreapi.com/';

const request = (link, method = 'GET', body = null) =>
  fetch(API + link, {
    method,
    body
  })
    .then(res => res.json())
    .catch(err => console.log(err))

export const getAll = (slug) => request(slug);
export const getSinge = (slug, id) => request(`${slug}/${id}`);

export const create = (slug, body) => request(slug, 'POST', body);



