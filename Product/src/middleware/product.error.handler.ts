import { NextFunction, Request, Response } from "express";
import { logger } from "../config/logger";
import { ProductError } from "../exception/product.exception";

export const errorHandler = (err: ProductError, req:Request, res:Response, next:NextFunction) => {
    logger.error(err);
    res.status(400).json({message : err.message, details: err});
}