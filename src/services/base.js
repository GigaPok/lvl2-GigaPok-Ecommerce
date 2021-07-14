const API = 'https://fakestoreapi.com/';

const request = link =>
  fetch(API + link)
    .then(res => res.json())
    .catch(err => console.log(err))

export const getAll = (slug) => request(slug);
export const getSinge = (slug, id) => request(`${slug}/${id}`);
