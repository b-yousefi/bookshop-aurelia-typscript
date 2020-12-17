import State from "../state";
import environment from "../../environment";
import Category from "models/Category";
import store from "store/store";

const Categories_URL = `${environment.API_URL}/categories`;

const fetchCategories = async (state: State): Promise<State> => {
  const url = `${Categories_URL}/allcategories`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonObject = await response.json();

  const categoriesTree: Category[] = jsonObject._embedded.categories;

  const newState: State = {
    ...state,
    categories: { tree: categoriesTree },
  };
  return newState;
};

store.registerAction("fetchCategories", fetchCategories);

export { fetchCategories };
