import Joi from "joi";

export const listDto = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  contacts: Joi.array().items(Joi.string()).required().default([]),
});
