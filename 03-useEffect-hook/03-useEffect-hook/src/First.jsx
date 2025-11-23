import { useState, useEffect } from "react"

function First() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(() =>{
        document.title = `Count : ${count}`
        console.log("useEffect Re- rendered")
    }, [count])

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default First
