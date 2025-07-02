import { Request , Response , NextFunction} from "express"
import { logger } from "../config/logger";
import { body , validationResult} from 'express-validator'
export const validateProduct = [ 
    body('name').isString().withMessage('name must be string').notEmpty().withMessage('name is empty'),
    body('price').isNumeric().withMessage('price must be number').notEmpty().withMessage('price is empty').toFloat(),
    
    (req: Request, res:Response, next: NextFunction) => {
        const err = validationResult(req);
        if(!err.isEmpty()){
            const error = new Error('Invalid Types');
            return next(error);
        }
        logger.info('Product validation successfull');
        next();
    }
]