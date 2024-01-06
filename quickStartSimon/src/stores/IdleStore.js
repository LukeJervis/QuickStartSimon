class IdleStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    PlayerMoney = 0;
    increaseBy = 1;
    MultiplyBy = 1;

    PlayerClick = () => {
        this.PlayerMoney += this.increaseBy * this.MultiplyBy;
    };
}

export default IdleStore;
