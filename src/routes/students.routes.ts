import { Router } from "express";
import { validateSchema } from "@/middlewares/validateSchema.middleware";
import * as studentsController from "@/controllers/students.controller";
import { studentSchema } from "@/schemas/student.schema";

const studentsRouter = Router();

studentsRouter.post("/students", validateSchema(studentSchema), studentsController.createStudent);
studentsRouter.get("/students", studentsController.findStudents);
studentsRouter.delete("/students/:id", studentsController.deleteStudent);
studentsRouter.put("/students/:id", validateSchema(studentSchema), studentsController.update)

export default studentsRouter;