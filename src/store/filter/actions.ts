import { Author } from "models/Author";
import Category from "models/Category";
import { Publication } from "models/Publication";
import store from "../store";

import * as Mutations from "./mutations";

function selectAuthor(author: Author): void {
  store.dispatch(Mutations.selectAuthor, author);
}

function selectAuthors(authors: Author[]): void {
  store.dispatch(Mutations.selectAuthors, authors);
}

function selectPublication(publication: Publication): void {
  store.dispatch(Mutations.selectPublication, publication);
}

function selectPublications(publications: Publication[]): void {
  store.dispatch(Mutations.selectPublications, publications);
}

function selectCategory(category: Category): void {
  store.dispatch(Mutations.selectCategory, category);
}

function selectCategories(categories: Category[]): void {
  store.dispatch(Mutations.selectCategories, categories);
}

export {
  selectAuthor,
  selectAuthors,
  selectPublication,
  selectPublications,
  selectCategory,
  selectCategories,
};
