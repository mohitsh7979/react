function Pro(item) {
  return (
    <>
      <div className="product">
        <div className="image">
          <img src={item.image} alt="" />
        </div>
        <div className="content">
          <h3>{item.title}</h3>
          <h2>Rs {item.price}</h2>
        </div>
      </div>
    </>
  );
}

export default Pro;
