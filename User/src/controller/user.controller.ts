import { Request , Response, NextFunction} from "express";
import { UserService } from "../service/user.service";
import { logger } from "../config/logger";
import { NewUser } from "../dto/userDto";
import axios from "axios";

export class UserController {
    private userService: UserService;
    private static instance: UserController | null = null;

    constructor(userService: UserService){
        this.userService = userService;
    }

    static getInstance =  ()=>{
        if(!UserController.instance){
            const userService = UserService.getInstance();
            UserController.instance = new UserController(userService);
        }
        return UserController.instance;
        
    }

    getUsers = async (req:Request, res:Response) => {
        try{
            const data = await this.userService.getAllUsers();
            res.json({users: data});
        }catch(err){
            logger.error('Error accured while getting users: '+err);
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