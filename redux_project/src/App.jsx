import "./App.css";
import Index from "./components/Index";
import { useState } from "react";

function App() {


  const [name,setname] = useState('');
  console.log(name)

  return (
    <div>
      <Index />
      <div> 
        <input type="text" onChange={(e)=>setname(e.target.value)} />
        <button>Submit</button>
      </div>
    </div>


  );
}

export default App;
