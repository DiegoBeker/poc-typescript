import Joi from "joi";
import { Student } from "@/protocols/index";

export const studentSchema = Joi.object<Student>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  register: Joi.string().required(),
  graduation: Joi.string().required(),
  age: Joi.number().integer().greater(15).required(),
  isActive: Joi.boolean().required()
})