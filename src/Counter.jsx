import { useState } from "react"

export default function Counter() {
    let [count, setCount] = useState(0);

    let handleCount = () => {
        // setCount(count + 1)
        setCount((preValue) => {
           return preValue + 1;
        })
    }
    return (
        <div>
            <h3>Count  = {count}</h3>
            <button onClick={handleCount}>Click Me</button>
        </div>
    )
}