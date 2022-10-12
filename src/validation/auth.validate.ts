import { Joi, Segments } from 'celebrate';

const SigninSchema = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
};

const SignupSchema = {
  body: {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
};

export default {
  SignupSchema,
  SigninSchema,
};
