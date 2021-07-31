const API = 'https://fakestoreapi.com/';

const initReq = {
  API,
  slug: '',
  body: null,
  headers: {},
  method: 'GET',
};

export const request = (req) => {
  req = { ...initReq, ...req };

  const user = JSON.parse(localStorage.getItem('userInfo'));
  if (user) {
    req.headers.Authorization = `Bearer ${user.token.access_token}`;
  }

  return fetch(req.API + req.slug, {
    method: req.method,
    body: req.body,
    headers: req.headers,
  })
    .then(res => {
      if (!res.url.search('login') && res.status === 401) {
        localStorage.removeItem('userInfo');
      }

      return res;
    })
    .then(res => res.json())
    .catch(err => console.log(err))
};

export const getAll = (req) => request(req);
export const getSinge = (req, id) => request({
  ...req,
  slug: `${req.slug}/${id}`
});
export const create = (req) => request({
  ...req,
  method: 'POST',
});



