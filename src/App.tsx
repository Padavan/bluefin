import { h, FunctionComponent } from "preact";
import { useState } from 'preact/hooks';

export const App: FunctionComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <div>Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </div>
  )
}