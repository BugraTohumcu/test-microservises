import { NextFunction, Request, Response } from "express";
import { UserValidationError } from "../exception/user.validation.exception";
import { logger } from "../config/logger";


export const userErrorHandler = (err: UserValidationError, req:Request, res: Response, next:NextFunction) => {
    logger.error(err);
    res.status(400).json({
        message: err.message,
        status: err.getStatus(),
        details: err.getDetalis(),
    })
}