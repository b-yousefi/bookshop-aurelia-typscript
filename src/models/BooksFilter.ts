export interface BooksFilter {
  publications: FilterItem[];
  categories: FilterItem[];
  authors: FilterItem[];
  doRefresh: boolean;
}

export interface FilterItem {
  id: string;
  name: string;
}
