export class ProductError extends Error{
    private status!: number;
    private details: any;

    constructor(message: string){
        super(message);
    }

    public getStatus(): number {
        return this.status;
    }

    public setStatus(status: number): void {
        this.status = status;
    }

    public getDetails(): any {
        return this.details;
    }

    public setDetails(details: any): void {
        this.details = details;
    }
}