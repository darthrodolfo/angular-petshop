export class Product {
  constructor(public _id: string,
    public title: string,
    public category: string,
    public description: string,
    public price: number,
    public images: string[]) {
  }
}
