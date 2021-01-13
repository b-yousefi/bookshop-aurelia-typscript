import { connectTo } from "aurelia-store";
import { CategoryState } from "../../../store/category/state";
import { pluck } from "rxjs/operators";
import { fetchCategories } from "../../../store/category/actions";
import Category from "models/Category";
import { selectCategory } from "store/filter/actions";

@connectTo<CategoryState>({
  selector: (store) => store.state.pipe(pluck("categories")),
  target: "categories",
})
export class CategoryMenuItem {
  public categories: CategoryState;

  bind(): void {
    fetchCategories();
  }

  select(category: Category) {
    selectCategory(category);
  }
}
