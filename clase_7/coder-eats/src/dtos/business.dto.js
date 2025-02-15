import Joi from "joi";

const productDto = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(0).required(),
});

export const businessDto = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  products: Joi.array().items(productDto).required(),
});
