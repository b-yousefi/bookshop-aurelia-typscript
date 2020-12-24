import { Author } from "models/Author";
import store from "../store";

import * as Mutations from "./mutations";

function selectAuthor(author: Author): void {
  store.dispatch(Mutations.selectAuthor, author);
}

export { selectAuthor };
