import { plainToClass } from "class-transformer";

import State from "../state";
import environment from "../../environment";
import { Publication } from "models/Publication";
import store from "store/store";

const PUBLICATION_URL = `${environment.API_URL}/publications`;

const fetchPublications = async (state: State): Promise<State> => {
  const response = await fetch(PUBLICATION_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonObject = await response.json();

  const fetched: Publication[] = jsonObject._embedded.publications;
  const fetchedPublications: Publication[] = plainToClass(Publication, fetched);

  const newState: State = {
    ...state,
    publications: { arr: fetchedPublications },
  };

  return newState;
};

store.registerAction("fetchPublications", fetchPublications);

export { fetchPublications };
