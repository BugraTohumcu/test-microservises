import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { UserValidationError } from "../exception/user.validation.exception";
import { logger } from "../config/logger";

export const validateUser = [
    body('name').isString().withMessage('Name must be string!'),
    body('age').isNumeric().withMessage('Age must be number!').toFloat(),
    (req:Request, res:Response, next:NextFunction) => {
        const err = validationResult(req);

        if(!err.isEmpty()){
            const error = new UserValidationError('Invalid Types');
            error.setStatus(400);
            error.setDetalis(err.array());
            next(error);
        }

        logger.info('User Validated');
        next();
    }
]