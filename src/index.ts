import express, { Request, Response } from "express";
import "express-async-errors";
import studentsRouter from "@/routes/students.routes";
import dotenv from "dotenv";
import errorHandlingMiddleware from "@/middlewares/errorHandler.middleware";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("I'm ok!");
});

app.use(studentsRouter);
app.use(errorHandlingMiddleware);

app.listen(5000, () => console.log(`server is up and running`));