import { connectTo } from "aurelia-store";
import { Book } from "models/Book";
import { distinctUntilChanged, pluck } from "rxjs/operators";
import { BookState } from "store/book/state";
import { FilterState } from "store/filter/state";
import { updateShoppingCart } from "store/shoppingCart/actions";
import { ShoppingCartState } from "store/shoppingCart/state";
import State from "store/state";
import { UserState } from "store/user/state";
import { fetchFilteredBooks } from "../../store/book/actions";

@connectTo<State>({
  selector: {
    books: (store) => store.state.pipe(pluck("books")),
    filter: (store) =>
      store.state.pipe(pluck("filter"), distinctUntilChanged()),
    shoppingCart: (store) =>
      store.state.pipe(pluck("shoppingCart"), distinctUntilChanged()),
    user: (store) => store.state.pipe(pluck("user")),
  },
})
export class Books {
  public books: BookState;
  public filter: FilterState;
  public shoppingCart: ShoppingCartState;
  public user: UserState;

  filterChanged(newState: FilterState, oldState: FilterState) {
    fetchFilteredBooks(newState.currentFilter);
  }

  onPageChanged = (page: number): void => {
    fetchFilteredBooks(
      {
        categories: [],
        authors: [],
        publications: [],
        doRefresh: true,
      },
      page
    );
  };

  onAddClicked(book: Book) {
    updateShoppingCart(book, this.getBookQuntityInCart(book));
  }

  getBookQuntityInCart(book: Book): number {
    const orderItem = this.shoppingCart.cart.orderItems.find(
      (ordItem) => ordItem.book.id === book.id
    );
    if (!orderItem) {
      return 1;
    } else return orderItem.quantity + 1;
  }
}
