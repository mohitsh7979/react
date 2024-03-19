import "./App.css";
import data from './Data/data.json'
import Pro from "./Pro";


function Product() {
  

  return (
    <>
      <div className="container">
         <h1>Our Products</h1>
         {
          data.map((item)=>(

            <Pro title = {item.title}  price = {item.price} image ={item.image}/>
            
          ))
         }
      </div>
    </>
  );
}

export default Product;
