import { Errback, NextFunction, Request, Response } from "express";

export default function errorHandlingMiddleware(error:Errback, req: Request, res: Response, next:NextFunction) {
    console.log(error);
    
    return res.sendStatus(500);
}