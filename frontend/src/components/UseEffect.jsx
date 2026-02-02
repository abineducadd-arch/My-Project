import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [value,setValue] = useState(0)
    const [color,setColor] = useState(false)

    const handleIncrement = ()=>{
        setValue(value+1)
    }
    const toggleColor = ()=>{
       setColor(!color)
    }

    useEffect(()=>{
        console.log('hello')
    },[value])
   
  return (
    <div>
        <p>{value}</p>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={toggleColor}>Change Color</button>
        <div
        style={{
            backgroundColor: color ?"black":"green",
            height : "50px"
        }}
        >

        </div>
    </div>
  )
}

export default UseEffect