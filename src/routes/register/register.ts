import { connectTo } from "aurelia-store";
import { pluck } from "rxjs/operators";
import { User } from "models/User";
import { UserState } from "store/user/state";
import { registerUser } from "store/user/actions";

@connectTo<UserState>({
  selector: (store) => store.state.pipe(pluck("user")),
  target: "userState",
})
export class Register {
  userState: UserState;
  user: User;

  bind() {
    this.user = Object.assign({}, this.userState.user);
  }

  register() {
    registerUser(this.user);
  }
}
