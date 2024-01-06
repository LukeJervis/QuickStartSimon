import { makeAutoObservable } from "mobx";
import IdleStore from "./IdleStore";

class RootStore {
    IdleStore;

    constructor() {
        this.idleStore = new IdleStore(this);
        makeAutoObservable(this);
    }
}

export default RootStore;
