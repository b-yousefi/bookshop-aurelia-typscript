import store from "../store";

import * as Mutations from "./mutations";

async function loginUser(username: string, password: string): Promise<void> {
  await store.dispatch(Mutations.loginUser, username, password);
}

export { loginUser };
