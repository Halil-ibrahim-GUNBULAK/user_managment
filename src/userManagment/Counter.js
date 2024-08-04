// Hooks example
import React, { useState,useEffect } from 'react'

export default function Counter() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title =`Butona ${count} kez tıklandı`;
    })
  return (
    <div>
        <p>Buton {count} times clicked</p>
        <button onClick={()=> setCount(count+1)}>Click</button>
    </div>
  )
}
