import { useEffect } from "react";


function Header(props){

    useEffect(()=>{

        alert("I am running on every render")
    })

    useEffect(()=>{

        alert("I am run only one time")
    },[])

     useEffect(()=>{
        
        alert("I am header page")

     },[props.count])

    return(

        <>
        <h1>This is my header page {props.count} </h1>
        </>
    )

}

export default Header;