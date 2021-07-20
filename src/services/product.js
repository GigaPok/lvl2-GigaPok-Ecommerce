import { getAll, getSinge, create } from "./base";

const slug = 'products';

const mapper = (data) => ({
  id: data.id,
  title: data.title,
  image: data.image,
  price: data.price,
})

const transfer = (body) => JSON.stringify(
  {
    title: body.Title,
    price: body.price,
    category: body.Img
  })

export const getAllProduct = () => getAll(slug)
  .then(data => data.map(el => mapper(el)))

export const getSingleProduct = (id) => getSinge(slug, id)
  .then(data => mapper(data));

export const createProduct = (body) => create(slug, transfer(body))

