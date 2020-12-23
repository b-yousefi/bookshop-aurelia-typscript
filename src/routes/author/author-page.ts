import { bindable } from "aurelia-framework";
import { connectTo } from "aurelia-store";
import { pluck } from "rxjs/operators";
import { AuthorState } from "store/author/state";
import { Author } from "../../models/Author";

@connectTo<AuthorState>({
  selector: (store) => store.state.pipe(pluck("authors")),
  target: "authors",
})
export class AuthorPage {
  public authors: AuthorState;
  @bindable author: Author;
  routeConfig;
  authorId: string;

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    this.authorId = params.id;
  }

  bind() {
    this.author = this.authors.arr.find((auth) => auth.id === this.authorId);
    this.routeConfig.navModel.setTitle(this.author.fullName);
  }
}
