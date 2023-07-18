import "./styles.css";
import { useState } from "react";

const game = ["cricker", "football", "hockey"];
export default function App() {
  const [store, setStore] = useState(game);
  const [newArr, setNewArr] = useState([]);
  console.log(newArr);
  const handleClick = (index) => {
    console.log(index);
    const stores = store.filter((value, i) => {
      return i !== index;
    });
    console.log(stores);
    setStore(stores);
  };

  const handleInput = (e, index) => {
    console.log(e.target.value, index);
    if (newArr.includes(index)) {
      const result = newArr.filter((val, i) => {
        return val !== index;
      });

      setNewArr(result);
    } else {
      setNewArr([...newArr, index]);
    }
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <ul>
        {store.map((val, index) => {
          return (
            <li>
              <input type="checkBox" onChange={(e) => handleInput(e, index)} />
              {val}
              {newArr.includes(index) && (
                <button onClick={() => handleClick(index)}>Delete</button>
              )}
            </li>
          );
        })}
      </ul>

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
