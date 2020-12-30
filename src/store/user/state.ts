import { User } from "models/User";

export interface UserState {
  user: User;
  token: string;
  isLoggedIn: boolean;
}

export const userInitialState: UserState = {
  user: {} as User,
  token: "",
  isLoggedIn: false,
};
