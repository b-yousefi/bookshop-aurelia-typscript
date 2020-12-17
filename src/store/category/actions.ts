import store from "../store";

import * as Mutations from "./mutations";

function fetchCategories(): void {
  store.dispatch(Mutations.fetchCategories);
}

export { fetchCategories };
