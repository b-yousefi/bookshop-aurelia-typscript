import store from "../store";

import * as Mutations from "./mutations";

async function loginUser(username: string, password: string): Promise<void> {
  await store.dispatch(Mutations.loginUser, username, password);
}

function logoutUser(): void {
  store.dispatch(Mutations.logoutUser);
}

export { loginUser, logoutUser };
