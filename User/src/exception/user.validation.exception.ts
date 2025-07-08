export class UserValidationError extends Error{
    private status?: number;
    private detalis?: any;

    constructor(message:string){
        super();
    }

    getStatus(): number | undefined {
        return this.status;
    }

    setStatus(status: number): void {
        this.status = status;
    }

    getDetalis(): any {
        return this.detalis;
    }

     setDetalis(detalis: any): void {
        this.detalis = detalis;
    }
}