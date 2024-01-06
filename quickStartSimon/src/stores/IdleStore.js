import { makeAutoObservable } from "mobx";

class IdleStore {
  rootStore = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  PlayerMoney = 0;
  increaseBy = 1;
  MultiplyBy = 1;

  PlayerClick = () => {
    this.PlayerMoney += this.increaseBy * this.MultiplyBy;
  };
  SuperDuperClick = () => {
    this.PlayerMoney += this.increaseBy * this.MultiplyBy;
  };
}

export default IdleStore;
