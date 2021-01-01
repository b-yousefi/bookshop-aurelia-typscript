import { Book } from "./Book";

export class OrderItem {
  id?: string;
  book: Book;
  quantity: number;
  constructor(book: Book, quantity: number, id?: string) {
    this.id = id;
    this.book = book;
    this.quantity = quantity;
  }
}
