import store from "../store";

import * as Mutations from "./mutations";

function fetchPublications(): void {
  store.dispatch(Mutations.fetchPublications);
}

export { fetchPublications };
