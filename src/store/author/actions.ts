import store from "../store";

import * as Mutations from "./mutations";

function fetchAuthors(): void {
  store.dispatch(Mutations.fetchAuthors);
}

export { fetchAuthors };
