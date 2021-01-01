import { connectTo } from "aurelia-store";
import { pluck } from "rxjs/operators";
import { fetchShoppingCart } from "store/shoppingCart/actions";
import { ShoppingCartState } from "store/shoppingCart/state";

@connectTo<ShoppingCartState>({
  selector: (store) => store.state.pipe(pluck("shoppingCart")),
  target: "shoppingCart",
})
export class ShoppingCart {
  public shoppingCart: ShoppingCartState;

  bind() {
    fetchShoppingCart();
  }

  onDeleteClicked() {}
}
