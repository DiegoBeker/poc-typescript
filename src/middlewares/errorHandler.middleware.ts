import { Errback, NextFunction, Request, Response } from "express";

export default function errorHandlingMiddleware(error:Errback, req: Request, res: Response, next:NextFunction) {
    return res.sendStatus(500);
}