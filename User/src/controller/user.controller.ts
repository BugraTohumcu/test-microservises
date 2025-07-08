import { Request , Response, NextFunction} from "express";
import { UserService } from "../service/user.service";
import { logger } from "../config/logger";
import { NewUser } from "../dto/userDto";


export class UserController {
    private userService: UserService;

    constructor(userService: UserService){
        this.userService = userService;
    }
    getUsers = async (req:Request, res:Response) => {
    try{
        const data = await this.userService.getAllUsers();
        res.json({users: data});
    }catch(err){
        logger.info(err);
    }
}

 addUser = async (req: Request, res:Response) => {
    try{
        const newUser : NewUser = req.body
        const result = await this.userService.addNewUser(newUser);
        res.json({user: result});
    }catch(err){    
        logger.info('Something went wrong: '+ err)
    }
}
}