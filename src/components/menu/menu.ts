import { connectTo } from "aurelia-store";
import { distinctUntilChanged, pluck } from "rxjs/operators";
import { logoutUser } from "store/user/actions";
import { UserState } from "store/user/state";

@connectTo<UserState>({
  selector: {
    user: (store) => store.state.pipe(pluck("user"), distinctUntilChanged()),
  },
})
export class Menu {
  user: UserState;
  loggedIn = false;

  userChanged(newState, oldState) {
    this.loggedIn = newState.isLoggedIn;
  }

  logout() {
    logoutUser();
  }
}
