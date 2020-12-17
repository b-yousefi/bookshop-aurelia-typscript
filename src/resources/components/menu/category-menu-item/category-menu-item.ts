import { connectTo } from "aurelia-store";
import { CategoryState } from "../../../../store/category/state";
import { pluck } from "rxjs/operators";
import { fetchCategories } from "../../../../store/category/actions";

@connectTo<CategoryState>({
  selector: (store) => store.state.pipe(pluck("categories")),
  target: "categories",
})
export class CategoryMenuItem {
  public categories: CategoryState;

  bind(): void {
    fetchCategories();
  }
}
