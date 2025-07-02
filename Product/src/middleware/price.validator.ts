import { Request, Response, NextFunction, json } from "express";
import {param ,validationResult} from 'express-validator'
import { ProductError } from "../exception/product.exception";


export const validatePrice  = [
    param('price').isNumeric().withMessage('price must be number').toInt(),
    (req: Request, res:Response, next:NextFunction) => {
        const err = validationResult(req);
        if(!err.isEmpty()){
            const error = new ProductError('Invalid types');
            error.setDetails(err.array);
            error.setStatus(400);
            return next(error);
        }
        next(); 
    }
];