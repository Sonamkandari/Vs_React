import { useState } from 'react'
import './App.css'

function App() {
  //first value is a variable and the second counter is a function here
  const [counter,setCounter]=useState(0)//this is a method
//  let counter=15

const addValue=()=>{
  // so to solve the problem of batching we ca use a call Back function here
  
  setCounter((prevCounter)=>prevCounter+1)
  setCounter((prevCounter)=>prevCounter+1)
  setCounter((prevCounter)=>prevCounter+1)
  setCounter((prevCounter)=>prevCounter+1)
  setCounter((prevCounter)=>prevCounter+1)
  //update steps of four
  


  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1) // wif we do his react will do-> Batching with this

  setCounter(counter+1)




// in  place of this we will call setCounter method here
//  counter= counter+1
//   console.log(counter);// want tpo count the v of the counter 
}

const removeValue=() =>{
  //counter=counter-1;
  setCounter(counter-1)

}
  return (
    <>
     <h1>Learning React Basics{counter}</h1>  
     <h2>counter value:{counter}</h2>
     <button
     onClick={addValue}// adding onclick event with the button
     >Add Value</button>
     
     <button
     onClick={removeValue} //removing a value on clicking the button
     >remove value</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
