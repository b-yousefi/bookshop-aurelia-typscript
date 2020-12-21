import { BooksFilter } from "./../../models/BooksFilter";
import { Book } from "../../models/Book";

export interface BookState {
  arr: Book[];
  currentFilter: BooksFilter;
}

export const bookInitialState: BookState = {
  arr: [],
  currentFilter: {
    publications: [],
    categories: [],
    authors: [],
    doRefresh: true,
  },
};
