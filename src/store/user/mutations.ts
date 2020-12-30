import State from "../state";
import environment from "../../environment";
import store from "store/store";
import { userInitialState } from "./state";

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

store.registerAction("loginUser", loginUser);

export { loginUser };
