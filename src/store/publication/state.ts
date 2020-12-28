import { Publication } from "models/Publication";

export interface PublicationState {
  arr: Publication[];
}

export const publicationInitialState: PublicationState = {
  arr: [],
};
