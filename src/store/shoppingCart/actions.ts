import { Book } from "models/Book";
import store from "../store";

import * as Mutations from "./mutations";

function fetchShoppingCart(): void {
  store.dispatch(Mutations.fetchShoppingCart);
}

function updateShoppingCart(book: Book, quantity: number): void {
  store.dispatch(Mutations.updateShoppingCart, book, quantity);
}

export { fetchShoppingCart, updateShoppingCart };
