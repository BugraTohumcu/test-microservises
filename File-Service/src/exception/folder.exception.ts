export class FolderException extends Error{
    message: string;
    private _details: any;
    private _status!: number;

    constructor(message:string){
        super();
        this.message = message;
    }
    
    public get details(): any {
        return this._details;
    }
    public set details(value: any) {
        this._details = value;
    }
    public get status(): number {
        return this._status;
    }
    public set status(value: number) {
        this._status = value;
    }


}