export class Product {
    private id?: number;
    private name: string;
    private price: number;

    
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getId(): number | undefined {
        return this.id;
    }
    public setId(id: number): void {
        this.id = id;
    }
    
}
