import { getAll, getSinge } from "./base";

const slug = 'products';

export const getAllProduct = () => getAll(slug);
export const getSingleProduct = (id) => getSinge(slug, id)
  .then(data => ({
    id: data.id,
    title: data.title,
    image: data.image,
    price: data.price,
  }));
