import { BooksFilter } from "../../models/BooksFilter";

export interface FilterState {
  currentFilter: BooksFilter;
}

export const filterInitialState: FilterState = {
  currentFilter: {
    authors: [],
    categories: [],
    publications: [],
    doRefresh: true,
  },
};
