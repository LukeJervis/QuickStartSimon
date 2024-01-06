import { makeAutoObservable } from "mobx";

class AppStore {
    rootStore = null;
    idleStore = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.idleStore = rootStore.idleStore;
        makeAutoObservable(this);
    }
}

export default AppStore;
