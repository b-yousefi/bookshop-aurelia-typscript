import { Router, RouterConfiguration } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";
import store from "store/store";
import { localStorageMiddleware, MiddlewarePlacement } from "aurelia-store";

export class App {
  router: Router;

  constructor() {
    store.registerMiddleware(
      localStorageMiddleware,
      MiddlewarePlacement.After,
      {
        key: "bookshop-storage-key",
      }
    );
  }

  configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = "Bookshop";
    config.options.pushState = true;
    config.options.root = "/";
    config.map([
      {
        route: "/",
        moduleId: PLATFORM.moduleName("./routes/home/home"),
        title: "Home",
      },
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
      {
        name: "shopping-cart",
        route: "shopping-cart",
        moduleId: PLATFORM.moduleName("./routes/shopping-cart/shopping-cart"),
        title: "Shopping Cart",
      },
      {
        name: "category",
        route: "categories/:id",
        moduleId: PLATFORM.moduleName("./routes/category/category-page"),
      },
    ]);

    this.router = router;
  }
}
