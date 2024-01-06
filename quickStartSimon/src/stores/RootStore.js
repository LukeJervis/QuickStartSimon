import { makeAutoObservable } from "mobx";
import AppStore from "./AppStore";
import IdleStore from "./IdleStore";

class RootStore {
    AppStore;
    idleStore;

    constructor() {
        this.AppStore = new AppStore(this);
        this.idleStore = new IdleStore(this);
        makeAutoObservable(this);
    }
}

export default RootStore;
