import { plainToClass } from "class-transformer";

import State from "../state";
import environment from "../../environment";
import { Author } from "models/Author";
import store from "store/store";

const AUTHORS_URL = `${environment.API_URL}/authors`;

const fetchAuthors = async (state: State): Promise<State> => {
  const response = await fetch(AUTHORS_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonObject = await response.json();

  const fetched: Author[] = jsonObject._embedded.authors;
  const fetchedAuthors: Author[] = plainToClass(Author, fetched);

  const newState: State = {
    ...state,
    authors: { arr: fetchedAuthors },
  };

  return newState;
};

store.registerAction("fetchAuthors", fetchAuthors);

export { fetchAuthors };
