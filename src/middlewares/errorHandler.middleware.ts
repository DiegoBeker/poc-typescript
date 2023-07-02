import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../protocols";
import status from "http-status";

export default function errorHandlingMiddleware(error: Error | ApplicationError, req: Request, res: Response, next: NextFunction) {
    console.log(error);
    if (error.name === "ConflictError")
        return res.status(status.CONFLICT).send({ message: error.message });
    if (error.name === 'NotFoundError')
        return res.status(status.NOT_FOUND).send({ message: error.message });
    if (error.name === 'BadRequest')
        return res.status(status.BAD_REQUEST).send({ message: error.message });

    return res.sendStatus(500);
}