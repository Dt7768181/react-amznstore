import { useState } from "react"

export default function App2(){
    const [count,setcount]=useState(0)
    const increment=()=>{
        setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
    return(
        <div>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </div>
    )
}