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
        moduleId: PLATFORM.moduleName("./routes/books/books"),
        title: "Books",
      },
    ]);

    this.router = router;
  }
}
