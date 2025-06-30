export class Product {
    private id?: number;
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
   
    public getId(): number | undefined {
        return this.id;
    }

}
