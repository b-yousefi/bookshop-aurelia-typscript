import { BooksFilter } from "models/BooksFilter";
import store from "../store";

import * as Mutations from "./mutations";

function fetchFilteredBooks(filter: BooksFilter, pageNumber = 0): void {
  store.dispatch(Mutations.fetchFilteredBooks, filter, pageNumber);
}

export { fetchFilteredBooks };
