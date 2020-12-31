import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";
import { loginUser } from "store/user/actions";

@inject(Router)
export class Login {
  username: string;
  password: string;
  router;

  constructor(router) {
    this.router = router;
  }

  async login(): Promise<void> {
    try {
      await loginUser(this.username, this.password);
      this.router.navigate("home");
    } catch (error) {
      console.log(error.message);
    }
  }

  register() {
    this.router.navigate("register");
  }
}
