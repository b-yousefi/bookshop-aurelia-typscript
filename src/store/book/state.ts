import { BooksFilter } from "./../../models/BooksFilter";
import { Book } from "../../models/Book";
import { PageInfo } from "models/PageInfo";

export interface BookState {
  arr: Book[];
  currentFilter: BooksFilter;
  pageInfo: PageInfo;
}

export const bookInitialState: BookState = {
  arr: [],
  currentFilter: {
    publications: [],
    categories: [],
    authors: [],
    doRefresh: true,
  },
  pageInfo: { size: 8, totalElements: 0, totalPages: 0, pageNumber: 0 },
};
