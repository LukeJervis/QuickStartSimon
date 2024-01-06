import { observer } from "mobx-react";
import { useRootStore } from "../stores/RootStoreProvider";
import Button from "../components/Button";

const IdleClicker = () => {
  const {
    idleStore: { PlayerMoney, PlayerClick },
  } = useRootStore();

  return (
    <div>
      <h1>Idle Clicker</h1>
      <p>Money: {PlayerMoney}</p>
      <Button press={PlayerClick}>Increment</Button>
      <Button>Super Duper Charge</Button>
    </div>
  );
};

export default observer(IdleClicker);
