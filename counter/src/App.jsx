import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]=useState(9)
  //let counter =9;
  const addval = () => {
    counter += 1;
    if(counter>=20){
      counter=20;
    }
    setcounter(counter );
    console.log(counter);
  }
  
  const subval = () => {
    //counter -= 1;
    // setcounter(counter - 1);
    // console.log(counter);
    counter= counter - 1;
    if(counter-1<=0){
      counter=0;
    }
    setcounter(counter );
  } 
  return (
    <>
      <h3>Hello 😭</h3>
      <h2>Counter value is {counter}</h2>

      <button
      onClick={addval}
      >Add value</button>
      <br/>
      <button
      onClick={subval}
      >sub value</button>
    </>
    
  )
}

export default App
