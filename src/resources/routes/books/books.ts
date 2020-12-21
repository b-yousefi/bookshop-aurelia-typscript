import { connectTo } from "aurelia-store";
import { pluck } from "rxjs/operators";
import { BookState } from "store/book/state";
import { fetchFilteredBooks } from "../../../store/book/actions";

@connectTo<BookState>({
  selector: (store) => store.state.pipe(pluck("books")),
  target: "books",
})
export class Books {
  public books: BookState;

  bind(): void {
    fetchFilteredBooks({
      categories: [],
      authors: [],
      publications: [],
      doRefresh: true,
    });
  }
}
