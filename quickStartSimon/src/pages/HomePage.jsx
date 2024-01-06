import { useState } from "react";
import Button from "../components/Button";

const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Quick Start Simon</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <Button press={() => setCount(count + 2)}>Bitch</Button>
    </div>
  );
};

export default HomePage;
