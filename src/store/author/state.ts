import { Author } from "models/Author";

export interface AuthorState {
  arr: Author[];
}

export const authorInitialState: AuthorState = {
  arr: [],
};
