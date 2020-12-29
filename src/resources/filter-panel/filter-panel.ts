import { connectTo } from "aurelia-store";
import { Author } from "models/Author";
import Category from "models/Category";
import { Publication } from "models/Publication";
import { pluck } from "rxjs/operators";
import { fetchAuthors } from "store/author/actions";
import { AuthorState } from "store/author/state";
import { CategoryState } from "store/category/state";
import {
  selectAuthors,
  selectCategories,
  selectPublications,
} from "store/filter/actions";
import { FilterState } from "store/filter/state";
import { fetchPublications } from "store/publication/actions";
import { PublicationState } from "store/publication/state";
import State from "store/state";

@connectTo<State>({
  selector: {
    publications: (store) => store.state.pipe(pluck("publications")),
    filter: (store) => store.state.pipe(pluck("filter")),
    authors: (store) => store.state.pipe(pluck("authors")),
    categories: (store) => store.state.pipe(pluck("categories")),
  },
})
export class FilterPanel {
  public publications: PublicationState;
  public authors: AuthorState;
  public categories: CategoryState;
  public filter: FilterState;

  selectedPublications: Publication[] = [];
  selectedAuthors: Author[] = [];
  selectedCategories: Category[] = [];

  bind(): void {
    fetchPublications();
    fetchAuthors();
  }

  onSelectPublication(): void {
    selectPublications(this.selectedPublications);
  }

  onSelectAuthor(): void {
    selectAuthors(this.selectedAuthors);
  }

  onSelectCategory(): void {
    selectCategories(this.selectedCategories);
  }
}
