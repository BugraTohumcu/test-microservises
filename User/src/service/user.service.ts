import { NewUser } from "../dto/userDto";
import { UserRepo } from "../repo/user.repo"; 

export class UserService{
    private userRepo: UserRepo;

    constructor(userRepo:UserRepo){
        this.userRepo = userRepo;
    }

    getAllUsers = async() => {
        return await this.userRepo.findAll();
    }

    addNewUser = async (user: NewUser) => {
        return await  this.userRepo.save(user);
    }
}

