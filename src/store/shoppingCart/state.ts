import { Order } from "models/Order";
import { OrderStatus } from "models/OrderStatus";

export interface ShoppingCartState {
  cart: Order;
}

export const cartInitialState: ShoppingCartState = {
  cart: new Order(
    "0",
    0,
    "init",
    new Date(),
    [],
    new OrderStatus("OPEN", new Date().toISOString())
  ),
};
