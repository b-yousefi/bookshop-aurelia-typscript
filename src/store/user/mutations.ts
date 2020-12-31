import State from "../state";
import environment from "../../environment";
import store from "store/store";
import { userInitialState } from "./state";
import { User } from "models/User";

const loginUser = async (
  state: State,
  username: string,
  password: string
): Promise<State> => {
  const url = `${environment.API_URL}/authenticate`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Login Failed");
  }

  const jsonObject = await response.json();
  const token = `Token ${jsonObject.token}`;

  const newState: State = {
    ...state,
    user: { ...userInitialState, isLoggedIn: true, token: token },
  };

  return newState;
};

const logoutUser = async (state: State): Promise<State> => {
  const newState: State = {
    ...state,
    user: { ...userInitialState, isLoggedIn: false, token: "" },
  };

  return newState;
};

const registerUser = async (state: State, user: User): Promise<State> => {
  console.log(user);
  const url = `${environment.API_URL}/register`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Register Failed");
  }

  return state;
};

store.registerAction("loginUser", loginUser);
store.registerAction("logoutUser", logoutUser);
store.registerAction("registerUser", registerUser);

export { loginUser, logoutUser, registerUser };
