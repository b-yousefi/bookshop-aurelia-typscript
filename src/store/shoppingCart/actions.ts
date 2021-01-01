import store from "../store";

import * as Mutations from "./mutations";

function fetchShoppingCart(): void {
  store.dispatch(Mutations.fetchShoppingCart);
}

export { fetchShoppingCart };
