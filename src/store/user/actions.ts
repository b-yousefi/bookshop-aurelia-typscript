import { User } from "models/User";
import store from "../store";

import * as Mutations from "./mutations";

async function loginUser(username: string, password: string): Promise<void> {
  await store.dispatch(Mutations.loginUser, username, password);
}

function logoutUser(): void {
  store.dispatch(Mutations.logoutUser);
}

function registerUser(user: User): void {
  store.dispatch(Mutations.registerUser, user);
}

export { loginUser, logoutUser, registerUser };
