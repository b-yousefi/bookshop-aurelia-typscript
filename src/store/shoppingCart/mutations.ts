import { plainToClass } from "class-transformer";

import State from "../state";
import environment from "../../environment";
import { Order } from "models/Order";
import store from "store/store";
import { OrderItem } from "models/OrderItem";
import { Book } from "models/Book";

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

const updateShoppingCart = async (
  state: State,
  book: Book,
  quantity: number
): Promise<State> => {
  const orderItemId = state.shoppingCart.cart.orderItems.find(
    (item) => item.book.id === book.id
  )?.id;
  const orderItem = new OrderItem(book, quantity);
  if (!orderItemId) {
    return addItemToShoppingCart(state, orderItem);
  } else {
    orderItem.id = orderItemId;
    if (quantity === 0) {
      return deleteItemFromShoppingCart(state, orderItem);
    } else {
      return updateOrderItemInShoppingCart(state, orderItem);
    }
  }
};

const addItemToShoppingCart = async (
  state: State,
  orderItem: OrderItem
): Promise<State> => {
  const orderId = state.shoppingCart.cart.id;

  const userId = state.user.user.id;
  const url = `${USER_URL}/${userId}/orders/${orderId}/order_items`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: state.user.token,
    },
    body: JSON.stringify({
      ...orderItem,
      book: orderItem.book._links.self.href,
    }),
  });
  const addedOrderItem: OrderItem = await response.json();

  const updatedOrderItems = [...state.shoppingCart.cart.orderItems];
  updatedOrderItems.push(addedOrderItem);
  const updatedCart = Object.assign({}, state.shoppingCart.cart);
  updatedCart.orderItems = updatedOrderItems;
  const totalPrice = computeTotalPrice(updatedOrderItems);
  updatedCart.totalPrice = totalPrice;

  const newState: State = {
    ...state,
    shoppingCart: {
      ...state.shoppingCart,
      cart: updatedCart,
    },
  };
  return newState;
};

const updateOrderItemInShoppingCart = async (
  state: State,
  orderItem: OrderItem
): Promise<State> => {
  const orderId = state.shoppingCart.cart.id;
  const userId = state.user.user.id;
  const url = `${USER_URL}/${userId}/orders/${orderId}/order_items/${orderItem.id}`;

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: state.user.token,
    },
    body: JSON.stringify({
      ...orderItem,
      book: orderItem.book._links.self.href,
    }),
  });
  const updatededOrderItem: OrderItem = await response.json();

  const updatedOrderItems = [...state.shoppingCart.cart.orderItems];
  const orderItemIndex = state.shoppingCart.cart.orderItems.findIndex(
    (ordItem) => ordItem.id === updatededOrderItem.id
  );
  updatedOrderItems[orderItemIndex] = updatededOrderItem;
  const updatedCart = Object.assign({}, state.shoppingCart.cart);
  updatedCart.orderItems = updatedOrderItems;
  const totalPrice = computeTotalPrice(updatedOrderItems);
  updatedCart.totalPrice = totalPrice;

  const newState: State = {
    ...state,
    shoppingCart: {
      ...state.shoppingCart,
      cart: updatedCart,
    },
  };
  return newState;
};

const deleteItemFromShoppingCart = async (
  state: State,
  orderItem: OrderItem
): Promise<State> => {
  const orderId = state.shoppingCart.cart.id;
  const userId = state.user.user.id;
  const url = `${USER_URL}/${userId}/orders/${orderId}/order_items/${orderItem.id}`;

  await fetch(url, {
    method: "DELETE",
  });

  const orderItemIndex = state.shoppingCart.cart.orderItems.findIndex(
    (ordItem) => ordItem.id === orderItem.id
  );
  const updatedOrderItems = [...state.shoppingCart.cart.orderItems];
  updatedOrderItems.splice(orderItemIndex, 1);
  const totalPrice = computeTotalPrice(updatedOrderItems);
  const updatedCart = Object.assign({}, state.shoppingCart.cart);
  updatedCart.orderItems = updatedOrderItems;
  updatedCart.totalPrice = totalPrice;

  const newState: State = {
    ...state,
    shoppingCart: {
      ...state.shoppingCart,
      cart: updatedCart,
    },
  };
  return newState;
};

function computeTotalPrice(orderItems: OrderItem[]) {
  let totalPrice = 0;
  orderItems.forEach((orderItem, key) => {
    totalPrice += orderItem.quantity * orderItem.book.price;
  });
  return totalPrice;
}

store.registerAction("fetchShoppingCart", fetchShoppingCart);
store.registerAction("updateShoppingCart", updateShoppingCart);

export { fetchShoppingCart, updateShoppingCart };
