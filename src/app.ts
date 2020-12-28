import { Router, RouterConfiguration } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = "Bookshop";
    config.options.pushState = true;
    config.options.root = "/";
    config.map([
      {
        route: "",
        moduleId: PLATFORM.moduleName("./routes/books/books"),
        title: "Home",
      },
      {
        route: "books",
        name: "books",
        moduleId: PLATFORM.moduleName("./routes/books/books"),
        title: "Books",
      },
      {
        route: "authors",
        name: "authors",
        moduleId: PLATFORM.moduleName("./routes/authors/authors"),
        title: "Authors",
      },
      {
        name: "author",
        route: "authors/:id",
        moduleId: PLATFORM.moduleName("./routes/author/author-page"),
      },
      {
        name: "publications",
        route: "publications",
        moduleId: PLATFORM.moduleName("./routes/publications/publications"),
        title: "Publications",
      },
    ]);

    this.router = router;
  }
}
