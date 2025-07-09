import { NewUser } from "../dto/userDto";
import { UserRepo } from "../repo/user.repo"; 

export class UserService{
    private userRepo: UserRepo;
    private static instance : UserService | null;

    constructor(userRepo:UserRepo){
        this.userRepo = userRepo;
    }

     static getInstance = () => {
        if(!UserService.instance){
            const repo = UserRepo.getInstance();
            UserService.instance = new UserService(repo);
        }
        return UserService.instance;
        
    }

    getAllUsers = async() => {
        return await this.userRepo.findAll();
    }

    addNewUser = async (user: NewUser) => {
        return await  this.userRepo.save(user);
    }
}

