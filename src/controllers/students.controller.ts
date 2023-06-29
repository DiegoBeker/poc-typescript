import { Request, Response } from "express";
import status from "http-status";

export function createStudent(req: Request, res: Response) {
    console.log(req.body);
    res.sendStatus(status.CREATED);
}