import { useState } from "react";

function Textarea(){

    let [value,setvalue] = useState('')
    let [mycolor,setcolor] = useState('')

    function text(event){

        setvalue(event.target.value)
    }

    function uppercase(){
         
        setvalue(value.toUpperCase())
    }


    function lowercase(){
         
        setvalue(value.toLowerCase())
    }


    function color(event){
           
        setcolor(event.target.value);
    }
    


    return(

  
        <div className="textarea">
            <textarea name="" id="" cols="30" rows="10" onChange={text}></textarea>
            <h1 style={{color:mycolor}}>{value}</h1> <br /> <br />
            <input type="text" onChange={color} /> <br /> <br />
            <button onClick={uppercase}>Uppercase</button>
            <button onClick={lowercase}>Lowercase</button>
        </div>
     
    )

}

export default Textarea;