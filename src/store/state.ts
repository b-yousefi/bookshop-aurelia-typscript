import { AuthorState, authorInitialState } from "./author/state";
import { BookState, bookInitialState } from "./book/state";
import { CategoryState, categoryInitialState } from "./category/state";
import { filterInitialState, FilterState } from "./filter/state";

export default interface State {
  categories: CategoryState;
  books: BookState;
  authors: AuthorState;
  filter: FilterState;
}

export const initialState: State = {
  categories: categoryInitialState,
  books: bookInitialState,
  authors: authorInitialState,
  filter: filterInitialState,
};
