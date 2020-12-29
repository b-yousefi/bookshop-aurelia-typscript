import { connectTo } from "aurelia-store";
import { distinctUntilChanged, pluck } from "rxjs/operators";
import { BookState } from "store/book/state";
import { FilterState } from "store/filter/state";
import State from "store/state";
import { fetchFilteredBooks } from "../../store/book/actions";

@connectTo<State>({
  selector: {
    books: (store) => store.state.pipe(pluck("books")),
    filter: (store) =>
      store.state.pipe(pluck("filter"), distinctUntilChanged()),
  },
})
export class Books {
  public books: BookState;
  public filter: FilterState;

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
}
