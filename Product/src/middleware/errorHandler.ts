import { NextFunction, Request, Response } from "express";
import { logger } from "../config/logger";

export const errorHandler = (err: Error, req:Request, res:Response, next:NextFunction) => {
    logger.error(err);
    const message = err.message;
    res.status(400).json({message : message});
}