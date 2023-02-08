import { useContext } from 'react'
import './App.css'
import Context from './Context'
import React from 'react'

export default function Button() {
    const [value,setValue]=useContext(Context)
    const adicionar=()=>{setValue((value)=>value+1)}
    return <>
     <h1>{value}</h1>
      <button className='button'  onClick={adicionar}>+1</button>
    </>
}