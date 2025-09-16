import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const haldleAdd = () => {
    const newNumber = count + 1;
    setCount(newNumber);
  };

  const stylecnter = {
    border: "6px solid green",
  };
  return (
    <div style={stylecnter}>
      <h3>Count: {count}</h3>
      <button onClick={haldleAdd}>Add</button>
    </div>
  );
}
