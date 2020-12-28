import { Author } from "models/Author";
import { Publication } from "models/Publication";
import store from "../store";

import * as Mutations from "./mutations";

function selectAuthor(author: Author): void {
  store.dispatch(Mutations.selectAuthor, author);
}

function selectPublication(publication: Publication): void {
  store.dispatch(Mutations.selectPublication, publication);
}

export { selectAuthor, selectPublication };
