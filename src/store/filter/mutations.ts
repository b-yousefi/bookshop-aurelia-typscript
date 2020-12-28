import { Author } from "models/Author";
import { FilterItem } from "models/BooksFilter";
import { Publication } from "models/Publication";
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

const selectPublication = (state: State, publication: Publication): State => {
  const selectedPublicationFilter: FilterItem = {
    id: publication.id,
    name: publication.name,
  };

  const newState: State = {
    ...state,
    filter: {
      ...state.filter,
      currentFilter: {
        ...state.filter.currentFilter,
        publications: [selectedPublicationFilter],
        doRefresh: true,
      },
    },
  };

  return newState;
};

store.registerAction("selectAuthor", selectAuthor);
store.registerAction("selectPublication", selectPublication);

export { selectAuthor, selectPublication };
