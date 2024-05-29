// store.js
import { makeAutoObservable } from "mobx";

class Store {
  user = null;
  theme = "light";

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user) {
    this.user = user;
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
  }
}

const store = new Store();
export default store;
