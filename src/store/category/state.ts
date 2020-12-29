import Category from "../../models/Category";

export interface CategoryState {
  tree: Category[];
  arr: Category[];
}

export const categoryInitialState: CategoryState = {
  tree: [],
  arr: [],
};
