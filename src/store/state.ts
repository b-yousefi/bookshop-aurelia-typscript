import { rehydrateFromLocalStorage } from "aurelia-store";
import { AuthorState, authorInitialState } from "./author/state";
import { BookState, bookInitialState } from "./book/state";
import { CategoryState, categoryInitialState } from "./category/state";
import { filterInitialState, FilterState } from "./filter/state";
import { publicationInitialState, PublicationState } from "./publication/state";
import store from "./store";
import { userInitialState, UserState } from "./user/state";

export default interface State {
  categories: CategoryState;
  books: BookState;
  authors: AuthorState;
  publications: PublicationState;
  filter: FilterState;
  user: UserState;
}

export const initialState: State = {
  categories: categoryInitialState,
  books: bookInitialState,
  authors: authorInitialState,
  publications: publicationInitialState,
  filter: filterInitialState,
  user: userInitialState,
};

store.registerAction("Rehydrate", rehydrateFromLocalStorage);
store.dispatch(rehydrateFromLocalStorage, "bookshop-storage-key");
