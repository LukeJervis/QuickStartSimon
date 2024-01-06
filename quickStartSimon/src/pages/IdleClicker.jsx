import { observer } from "mobx-react";
import { useRootStore } from "../stores/RootStoreProvider";
import Button from "../components/Button";

const IdleClicker = () => {
  const {
    idleStore: { PlayerMoney, PlayerClick, SuperDuperClick },
  } = useRootStore();

  // const superPurchase = if (PlayerMoney) => 30 {
  //   playerMoney - 30 && SuperDuperClick.disabled = {false}
  // }

  // if playerMoney is greater than or equal to 30, then superPurchase is false, else superPurchase is true
  const superPurchase = PlayerMoney >= 30 ? false : true;

  return (
    <div>
      <h1>Idle Clicker</h1>
      <p>Money: {PlayerMoney}</p>
      <Button press={PlayerClick}>Increment</Button>
      <Button press={SuperDuperClick} disabled={superPurchase}>
        Super Duper Charge
      </Button>
    </div>
  );
};

export default observer(IdleClicker);
