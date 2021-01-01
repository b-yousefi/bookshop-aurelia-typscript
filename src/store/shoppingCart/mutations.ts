import { plainToClass } from "class-transformer";

import State from "../state";
import environment from "../../environment";
import { Order } from "models/Order";
import store from "store/store";

const USER_URL = `${environment.API_URL}/users`;

const fetchShoppingCart = async (state: State): Promise<State> => {
  const userId = state.user.user.id;
  const url = `${USER_URL}/${userId}/shopping_cart`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: state.user.token,
    },
  });
  const fetched: Order = await response.json();

  const fetchedCart: Order = plainToClass(Order, fetched as Order);

  const newState: State = {
    ...state,
    shoppingCart: { cart: fetchedCart },
  };

  return newState;
};

store.registerAction("fetchShoppingCart", fetchShoppingCart);

export { fetchShoppingCart };
