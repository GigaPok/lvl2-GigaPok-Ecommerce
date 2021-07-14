import { getAll, getSinge } from "./base";

const slug = 'products';

const mapper = (data) => ({
  id: data.id,
  title: data.title,
  image: data.image,
  price: data.price,
})

export const getAllProduct = () => getAll(slug)
  .then(data => data.map(el => mapper(el)))

export const getSingleProduct = (id) => getSinge(slug, id)
  .then(data => mapper(data));


