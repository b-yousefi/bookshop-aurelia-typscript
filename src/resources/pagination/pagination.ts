import { bindable } from "aurelia-framework";
import { PageInfo } from "./../../models/PageInfo";
export class Pagination {
  @bindable page: PageInfo;

  @bindable onclick: (page: number) => void;

  onNextClicked = (): void => {
    const nextPage = this.page.pageNumber + 1;
    if (nextPage < this.page.totalPages) {
      this.onclick(nextPage);
    }
  };

  onPreviousClicked = (): void => {
    const previousPage = this.page.pageNumber - 1;
    if (previousPage >= 0) {
      this.onclick(previousPage);
    }
  };
}
