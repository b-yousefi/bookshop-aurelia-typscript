import { Author } from "models/Author";
import { FilterItem } from "models/BooksFilter";
import Category from "models/Category";
import { Publication } from "models/Publication";
import store from "store/store";
import State from "../state";
import { filterInitialState } from "./state";

const selectAuthor = (state: State, author: Author): State => {
  const filter = { ...filterInitialState };
  filter.currentFilter.authors = [
    {
      id: author.id,
      name: author.fullName,
    },
  ];
  const newState: State = {
    ...state,
    filter: filter,
  };
  return newState;
};

const selectAuthors = (state: State, authors: Author[]): State => {
  const selectedAuthorFilters: FilterItem[] = authors.map((author) => {
    return {
      id: author.id,
      name: author.fullName,
    };
  });

  const newState: State = {
    ...state,
    filter: {
      ...state.filter,
      currentFilter: {
        ...state.filter.currentFilter,
        authors: selectedAuthorFilters,
        doRefresh: true,
      },
    },
  };

  return newState;
};

const selectPublication = (state: State, publication: Publication): State => {
  const filter = { ...filterInitialState };
  filter.currentFilter.publications = [
    {
      id: publication.id,
      name: publication.name,
    },
  ];
  const newState: State = {
    ...state,
    filter: filter,
  };
  return newState;
};

const selectPublications = (
  state: State,
  publications: Publication[]
): State => {
  const selectedPublicationFilters: FilterItem[] = publications.map(
    (publication) => {
      return {
        id: publication.id,
        name: publication.name,
      };
    }
  );

  const newState: State = {
    ...state,
    filter: {
      ...state.filter,
      currentFilter: {
        ...state.filter.currentFilter,
        publications: selectedPublicationFilters,
        doRefresh: true,
      },
    },
  };

  return newState;
};

const selectCategory = (state: State, category: Category): State => {
  const filter = { ...filterInitialState };
  filter.currentFilter.categories = [
    {
      id: category.id,
      name: category.name,
    },
  ];
  const newState: State = {
    ...state,
    filter: filter,
  };

  return newState;
};

const selectCategories = (state: State, categories: Category[]): State => {
  const selectedCategoryFilters: FilterItem[] = categories.map((category) => {
    return {
      id: category.id,
      name: category.name,
    };
  });

  const newState: State = {
    ...state,
    filter: {
      ...state.filter,
      currentFilter: {
        ...state.filter.currentFilter,
        categories: selectedCategoryFilters,
        doRefresh: true,
      },
    },
  };

  return newState;
};

const clearFilter = (state: State): State => {
  const newState: State = {
    ...state,
    filter: filterInitialState,
  };

  return newState;
};

store.registerAction("selectAuthor", selectAuthor);
store.registerAction("selectAuthors", selectAuthors);
store.registerAction("selectPublication", selectPublication);
store.registerAction("selectPublications", selectPublications);
store.registerAction("selectCategory", selectCategory);
store.registerAction("selectCategories", selectCategories);
store.registerAction("clearFilter", clearFilter);

export {
  selectAuthor,
  selectAuthors,
  selectPublication,
  selectPublications,
  selectCategory,
  selectCategories,
  clearFilter,
};
