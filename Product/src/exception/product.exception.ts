export class ProductError extends Error{
    private status!: number;
    private details: any;

    constructor(message: string){
        super(message);
    }

    getStatus(): number {
        return this.status;
    }

    setStatus(status: number): void {
        this.status = status;
    }

    getDetails(): any {
        return this.details;
    }

    setDetails(details: any): void {
        this.details = details;
    }
}