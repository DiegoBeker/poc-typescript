import { Request, Response } from "express";
import status from "http-status";
import { Student } from "../protocols/index";
import * as studentsService from '../services/students.services'

export async function createStudent(req: Request, res: Response) {
    console.log(req.body);
    const student = req.body as Student;
    await studentsService.createStudent(student);
    res.sendStatus(status.CREATED);
}