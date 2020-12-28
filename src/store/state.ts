import { AuthorState, authorInitialState } from "./author/state";
import { BookState, bookInitialState } from "./book/state";
import { CategoryState, categoryInitialState } from "./category/state";
import { filterInitialState, FilterState } from "./filter/state";
import { publicationInitialState, PublicationState } from "./publication/state";

export default interface State {
  categories: CategoryState;
  books: BookState;
  authors: AuthorState;
  publications: PublicationState;
  filter: FilterState;
}

export const initialState: State = {
  categories: categoryInitialState,
  books: bookInitialState,
  authors: authorInitialState,
  publications: publicationInitialState,
  filter: filterInitialState,
};
