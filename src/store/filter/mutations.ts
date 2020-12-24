import { Author } from "models/Author";
import { FilterItem } from "models/BooksFilter";
import store from "store/store";
import State from "../state";

const selectAuthor = (state: State, author: Author): State => {
  const selectedAuthorFilter: FilterItem = {
    id: author.id,
    name: author.fullName,
  };

  const newState: State = {
    ...state,
    filter: {
      ...state.filter,
      currentFilter: {
        ...state.filter.currentFilter,
        authors: [selectedAuthorFilter],
        doRefresh: true,
      },
    },
  };

  return newState;
};

store.registerAction("selectAuthor", selectAuthor);

export { selectAuthor };
