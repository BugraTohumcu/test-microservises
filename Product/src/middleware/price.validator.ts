import { Request, Response, NextFunction, json } from "express";
import {body ,validationResult} from 'express-validator'


export const validatePrice  = [
    body('price').isNumeric().withMessage('price must be number'),
    (req: Request, res:Response, next:NextFunction) => {
        const err = validationResult(req)
        if(!err.isEmpty()){
            const error = new Error('Invalid types');
            return next(error);
        }
        next(); 
    }
];