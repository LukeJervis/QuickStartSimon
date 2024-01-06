import { observer } from "mobx-react";
import { useRootStore } from "../stores/RootStoreProvider";

const IdleClicker = () => {
    const {
        idleStore: { PlayerMoney, PlayerClick }
    } = useRootStore();

    return (
        <div>
            <h1>Idle Clicker</h1>
            <p>Money: {PlayerMoney}</p>
            <button onClick={PlayerClick}>Increment</button>
        </div>
    );
};

export default observer(IdleClicker);
