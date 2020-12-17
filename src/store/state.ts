import { CategoryState, categoryInitialState } from "./category/state";

export default interface State {
  categories: CategoryState;
}

export const initialState: State = {
  categories: categoryInitialState,
};
