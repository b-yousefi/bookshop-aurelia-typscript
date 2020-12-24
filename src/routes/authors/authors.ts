import { connectTo } from "aurelia-store";
import { Author } from "models/Author";
import { pluck } from "rxjs/operators";
import { AuthorState } from "store/author/state";
import { selectAuthor } from "store/filter/actions";
import { fetchAuthors } from "../../store/author/actions";

@connectTo<AuthorState>({
  selector: (store) => store.state.pipe(pluck("authors")),
  target: "authors",
})
export class Authors {
  public authors: AuthorState;

  bind(): void {
    fetchAuthors();
  }

  select(author: Author) {
    selectAuthor(author);
  }
}
