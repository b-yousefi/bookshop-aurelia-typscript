import Category from "../../models/Category";

export interface CategoryState {
  tree: Category[];
}

export const categoryInitialState: CategoryState = {
  tree: [],
};
