import { NextFunction, Request, Response } from "express";

export const errorHandler = (err: Error, req:Request, res:Response, next:NextFunction) => {
    console.error('Error handler layer - ' + err);

    const message = err.message;

    res.status(500).json({message : message});
}