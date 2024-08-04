import React, { Component } from 'react'
import { connect ,useDispatch } from "react-redux";
import { increment,decrement } from "../redux/counterSlice";
const CounterButton = () => {
    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=> dispatch(increment())}>Artır + </button>
        <button onClick={()=> dispatch(decrement())}>Azalt - </button>
        </div>
  )
}
export default CounterButton
