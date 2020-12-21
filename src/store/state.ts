import { BookState, bookInitialState } from "./book/state";
import { CategoryState, categoryInitialState } from "./category/state";

export default interface State {
  categories: CategoryState;
  books: BookState;
}

export const initialState: State = {
  categories: categoryInitialState,
  books: bookInitialState,
};
