import { connectTo } from "aurelia-store";
import { distinctUntilChanged, pluck } from "rxjs/operators";
import { CategoryState } from "store/category/state";
import { selectCategory } from "store/filter/actions";
import Category from "../../models/Category";

@connectTo<CategoryState>({
  selector: {
    categories: (store) =>
      store.state.pipe(pluck("categories"), distinctUntilChanged()),
  },
})
export class CategoryPage {
  public categories: CategoryState;
  category: Category;
  categoryId: string;
  routeConfig;

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    this.categoryId = params.id;
    if (this.categories) {
      this.category = this.categories.arr.find(
        (cat) => cat.id == this.categoryId
      );
    }
  }

  bind() {
    this.category = this.categories.arr.find(
      (cat) => cat.id == this.categoryId
    );
    this.routeConfig.navModel.setTitle(this.category.name);
  }

  select(category: Category) {
    selectCategory(category);
  }
}
