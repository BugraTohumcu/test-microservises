import { Request, Response, NextFunction, json } from "express";
import {param ,validationResult} from 'express-validator'


export const validatePrice  = [
    param('price').isNumeric().withMessage('price must be number').toInt(),
    (req: Request, res:Response, next:NextFunction) => {
        const err = validationResult(req);
        if(!err.isEmpty()){
            const error = new Error('Invalid types');
            return next(error);
        }
        next(); 
    }
];