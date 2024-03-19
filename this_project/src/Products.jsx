import "./App.css";

function Product() {
  const prod = [
    {
      image:
        "https://images.meesho.com/images/products/57409918/iucvm_400.webp",
      title: "Trendy Alluring Women Backpacks",
      price: 122,
    },
    {
      image:
        "https://images.meesho.com/images/products/75970557/6kmep_400.webp",
      title: "EyeBogler Men's Tshirts",
      price: 213,
    },
    {
      image: "https://images.meesho.com/images/products/3145241/1_400.webp",
      title: "Ethnic Fancy Silk Cotton ",
      price: 217,
    },
    {
      image:
        "https://images.meesho.com/images/products/60127064/xd5cl_400.webp",
      title: "Pretty Stylus Girls Frocks & Dresses",
      price: 333,
    },
    {
      image:
        "https://images.meesho.com/images/products/103713364/0ioi6_400.webp",
      title: "BUCCLY Women's Dresses",
      price: 185,
    },
  ];


  return (
    <>
      {prod.map((item) => (
        item.price >= 100 ?
        <div className="product">
           <div className="image">
             <img src={item.image} alt="" />
           </div>
           <div className="content">
             <h3>{item.title}</h3>
             <h2>Rs {item.price}</h2>
           </div>
        </div> : null
      ))}
    </>
  );
}

export default Product;
