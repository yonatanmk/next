import { useStore } from "../stores";
import { observer } from "mobx-react";

const Index = (props) => {
  console.log("props");
  console.log(props);
  const store = useStore();
  console.log("store");
  console.log(store);
  const {
    sampleStore: { counter, increment, decrement },
  } = store;
  return (
    <>
      <h1>MobX and React.js example</h1>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {/* <ul>
      <li>
        <Link href="/post/[id]" as="/post/1">
          <a>Post 1</a>
        </Link>
      </li>
      <li>
        <Link href="/post/[id]" as="/post/2">
          <a>Post 2</a>
        </Link>
      </li>
    </ul> */}
    </>
  );
};

export default observer(Index);
