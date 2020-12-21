import State from "../state";
import environment from "../../environment";
import { Book } from "models/Book";
import store from "store/store";
import { BooksFilter } from "models/BooksFilter";
import * as _ from "lodash";
import { PageInfo } from "models/PageInfo";

const Books_URL = `${environment.API_URL}/books`;

const PAGE_SIZE = 8;

const fetchFilteredBooks = async (
  state: State,
  filter: BooksFilter,
  page: number
): Promise<State> => {
  const booksFilter = state.books.currentFilter;

  if (!shouldRefresh(filter, booksFilter)) {
    //do nothing data is up to date
    return;
  }

  const url =
    `${Books_URL}/filter?publicationIds=${filter.publications.map(
      (f) => f.id
    )}` +
    `&categoryIds=${filter.categories.map((f) => f.id)}` +
    `&authorIds=${filter.authors.map((f) => f.id)}` +
    `&page=${page - 1}&size=${PAGE_SIZE}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonObject = await response.json();

  const fetchedBooks: Book[] = jsonObject._embedded.books;

  const pageInfo: PageInfo = jsonObject.page;
  pageInfo.pageNumber = jsonObject.page.number;

  const newState: State = {
    ...state,
    books: { arr: fetchedBooks, currentFilter: filter },
  };
  return newState;
};

function shouldRefresh(filter: BooksFilter, currentFilter: BooksFilter) {
  if (
    filter.doRefresh ||
    !currentFilter ||
    !_.isEqual(filter.publications, currentFilter.publications) ||
    !_.isEqual(filter.categories, currentFilter.categories) ||
    !_.isEqual(filter.authors, currentFilter.authors)
  ) {
    return true;
  } else {
    return false;
  }
}

store.registerAction("fetchFilteredBooks", fetchFilteredBooks);

export { fetchFilteredBooks };
