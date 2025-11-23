import { useState, useEffect } from "react"

function Timer() {
    const [seconds, setSeconds] = useState(0)
    

    useEffect(() =>{
       const interval = setInterval(() => {
            setSeconds((prev) => prev + 1) 
        }, 2000)

        return () =>{
            clearInterval(interval)
            console.log("Timer Cleard.")
        }
       }, [])

       

  return (
    <div>
        <h2>Seconds : {seconds}</h2>
    </div>
  )
}

export default Timer
