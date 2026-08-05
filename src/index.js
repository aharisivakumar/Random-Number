import { useState } from "react"
import ReactDOM from "react-dom/client"
import "./app.css"
const root=ReactDOM.createRoot(document.getElementById("root"))
function Randomnumber(){
  const [item,setitem]=useState(0)
    const change=(evt)=>{
      const num=Math.floor(Math.random()*100)+1;
      setitem(num)
    }
  return(
    <div className="container">
      <h1>Random Number</h1>
    <h1>{item}</h1>
    <button onClick={change}>Generate Random num</button>
    </div>
  )
}
root.render(<Randomnumber></Randomnumber>)