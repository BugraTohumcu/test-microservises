import { param, body, validationResult } from "express-validator"
import { FOLDER_ERRORS_BACKEND } from "../../shared/messages/folder.errors/folder.error.backend"
import { FolderException } from "../../exception/folder.exception";
import { NextFunction, Request , Response} from "express"
import { logger } from "../../config/logger";

export const validateCreateFolder = [
    body('title').notEmpty().withMessage(FOLDER_ERRORS_BACKEND.TITLE_REQUIRED)
    .isString().withMessage(FOLDER_ERRORS_BACKEND.TITLE_INVALID),

    body('description').optional().isString().withMessage(FOLDER_ERRORS_BACKEND.DESCRIPTION_INVALID),

    body('organization').notEmpty().withMessage(FOLDER_ERRORS_BACKEND.ORGANIZATION_REQUIRED)
    .isString().withMessage(FOLDER_ERRORS_BACKEND.ORGANIZATION_INVALID),
    
    body('color').notEmpty().withMessage(FOLDER_ERRORS_BACKEND.COLOR_REQUIRED)
    .isString().withMessage(FOLDER_ERRORS_BACKEND.COLOR_INVALID),
    folderValidation
];

export const validateUpdateFolder = [
    body('f_id').notEmpty().withMessage(FOLDER_ERRORS_BACKEND.ID_REQUIRED)
    .isNumeric().withMessage(FOLDER_ERRORS_BACKEND.ID_INVALID).toFloat(),

    body('title').notEmpty().withMessage(FOLDER_ERRORS_BACKEND.TITLE_REQUIRED)
    .isString().withMessage(FOLDER_ERRORS_BACKEND.TITLE_INVALID),

    body('description').optional().isString().withMessage(FOLDER_ERRORS_BACKEND.DESCRIPTION_INVALID),

    body('organization').notEmpty().withMessage(FOLDER_ERRORS_BACKEND.ORGANIZATION_REQUIRED)
    .isString().withMessage(FOLDER_ERRORS_BACKEND.ORGANIZATION_INVALID),
    
    body('color').notEmpty().withMessage(FOLDER_ERRORS_BACKEND.COLOR_REQUIRED)
    .isString().withMessage(FOLDER_ERRORS_BACKEND.COLOR_INVALID),
    folderValidation
];

export const validateDeleteFolder = [
    param('id').notEmpty().withMessage(FOLDER_ERRORS_BACKEND.ID_REQUIRED)
    .isNumeric().withMessage(FOLDER_ERRORS_BACKEND.ID_INVALID).toFloat(),
    folderValidation
]

function folderValidation(req: Request, res:Response, next:NextFunction){
    const err = validationResult(req);
        if(!err.isEmpty()){
            const error = new FolderException('Folder Validation failed');
            error.details = err.array();
            error.status = 400;
            return next(error);
        }
        logger.info('Input Validated');
        next();
}