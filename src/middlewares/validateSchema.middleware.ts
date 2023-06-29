import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";
import status from "http-status";

export function validateSchema(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, { abortEarly: false });

        if (validation.error) {
            const errors = validation.error.details.map((detail) => detail.message);
            return res.status(status.UNPROCESSABLE_ENTITY).send(errors);
        }

        next();
    };
}