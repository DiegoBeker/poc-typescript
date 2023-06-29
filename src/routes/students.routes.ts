import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import * as studentsController from "../controllers/students.controller";
import { studentSchema } from "../schemas/student.schema";

const studentsRouter = Router();

studentsRouter.post("/students", validateSchema(studentSchema), studentsController.createStudent);

export default studentsRouter;