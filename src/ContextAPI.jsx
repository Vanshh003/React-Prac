import { createContext, useState } from 'react'
import './App.css'
import Child1 from './components/Child1';

export const Count = createContext(0);

function ContextAPI() {
  let [count, setCount] = useState(0);

  function btnClickHandler() {
    setCount((c) => c+1);
  };

  return (
    <>
      <h1>Context</h1>
      {/* jis bhi context me value deni hai us context me provide krdo.. */}
      <Count.Provider value={count}>
        <Child1 />
      </Count.Provider>

      <button onClick={btnClickHandler}>Click</button>
    </>
  )
}

export default ContextAPI
