export class Book {
  id: number;
  code: string;
  name: string;
  price: number;

  constructor(code: string, name: string, price: number) {
    if (!this.id) this.id += 1;
    this.code = code;
    this.name = name;
    this.price = price;
  }
}
