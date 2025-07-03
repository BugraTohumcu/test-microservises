export class UserValidationError extends Error{
    private status?: number;
    private detalis?: any;

    constructor(message:string){
        super();
    }

    public getStatus(): number | undefined {
        return this.status;
    }

    public setStatus(status: number): void {
        this.status = status;
    }

    public getDetalis(): any {
        return this.detalis;
    }

    public setDetalis(detalis: any): void {
        this.detalis = detalis;
    }
}