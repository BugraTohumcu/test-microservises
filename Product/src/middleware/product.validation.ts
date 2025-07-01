import { Request , Response , NextFunction} from "express"
export const validateProduct =  async ( req: Request, res:Response, next: NextFunction) => {
    let name = req.body.name;
    let price = req.body.price;

    if(!name || !price){
        let err = new Error('Empty attributes');
        console.error('Validation layer: '+ err);
        next(err);
        return;
    }

    if(typeof name !== 'string' || typeof price !== 'number'){
        let err = new Error('Incorrect types');
        console.error('Validation layer: '+ err);
        next(err);
        return;
    }

    console.debug('Product validation successfull');
    next();
}