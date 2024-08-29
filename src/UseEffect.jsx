
import { useEffect, useState } from 'react'
import './App.css'

function UseEffect() {

    let [count, setCount] = useState(0);
    let [A, setA] = useState(0);
    let [B, setB] = useState(0);

    function update() {
      setCount(count+1);
      setA(count+1);
      setB(count+1);
    };

    useEffect(() => {
      console.log("hi");
    });

    useEffect(() => {
      console.log("hi");
    }, []);

    useEffect(() => {
      console.log("hi");
    }, [A, B]);

    return (
      <>
        <h1>{count}</h1>
        <button onClick={update}>Click</button>
        <button onClick={() => {setA(A+1)}}>A</button>
        <button onClick={() => {setB(B+1)}}>B</button> 
        <h1>useEffect</h1>  
      </>
    )
}

export default UseEffect