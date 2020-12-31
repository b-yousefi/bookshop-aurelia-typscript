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
        route: "home",
        name: "home",
        moduleId: PLATFORM.moduleName("./routes/home/home"),
        title: "Home",
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
      {
        name: "login",
        route: "login",
        moduleId: PLATFORM.moduleName("./routes/login/login"),
        title: "Login",
      },
      {
        name: "register",
        route: "register",
        moduleId: PLATFORM.moduleName("./routes/register/register"),
        title: "Register",
      },
    ]);

    this.router = router;
  }
}
