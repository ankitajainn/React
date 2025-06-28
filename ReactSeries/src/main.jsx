import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'

const anotheruser="faltu hu "
const reactelement={
    type:'a',
    props:{

        href:'https://www.google.com',
        target:'_blank',
    },
    childern:'Click to go google'
}

function Myapp(){
  return (
    <div>
      <h1>My React App</h1>
    </div>
  ) 
}

//making react element
const Ogelement = React.createElement(
  'a',//tag
  {href: 'https://google.com', target: '_blank'},
  'dusri bar click or '//direct text
  ,
  anotheruser

)

const anotherele =(
  <a href= "https://google.com" target='_blank'>go by another 
  </a>
)

ReactDOM.createRoot(document.getElementById('root')).
render(

    // {/* <Myapp />  ye Chal jayega*/}
    // {/*reactelement ye nahi h */}
    //anotherele  // ye chale jayenge
    Ogelement // ye to p\og h
    //<App/>
  //,
)
