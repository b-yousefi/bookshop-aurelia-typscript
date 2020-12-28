import { Publication } from "./../../models/Publication";
import { connectTo } from "aurelia-store";
import { pluck } from "rxjs/operators";
import { PublicationState } from "store/publication/state";
import { selectPublication } from "store/filter/actions";
import { fetchPublications } from "../../store/publication/actions";

@connectTo<PublicationState>({
  selector: (store) => store.state.pipe(pluck("publications")),
  target: "publications",
})
export class Publications {
  public authors: PublicationState;

  bind(): void {
    fetchPublications();
  }

  select(publication: Publication) {
    selectPublication(publication);
  }
}
