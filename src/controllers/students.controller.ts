import { Request, Response } from "express";
import status from "http-status";
import { CreateStudent } from "@/protocols/index";
import * as studentsService from '@/services/students.services'
import { badRequestError } from "../errors/badRequest.error";

export async function createStudent(req: Request, res: Response) {
    const student = req.body as CreateStudent;
    await studentsService.createStudent(student);
    res.sendStatus(status.CREATED);
}

export async function findStudents(req: Request, res: Response) {
    const course = req.query.course as string;
    const students = await studentsService.findStudents(course);
    res.send(students);
}

export async function deleteStudent(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    if(isNaN(id)) throw badRequestError();

    await studentsService.deleteStudent(id);

    res.sendStatus(status.NO_CONTENT);
}

export async function update(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    if(isNaN(id)) throw badRequestError();

    const student = req.body as CreateStudent;
    await studentsService.update(id, student);
    res.sendStatus(status.OK);
}

export async function findStudentById(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    if(isNaN(id)) throw badRequestError();

    const student = await studentsService.findStudentById(id);
    res.send(student);
}