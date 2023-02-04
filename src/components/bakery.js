import React, { useState } from 'react';

function BakeryProduct({ name, price, image, ProductsData, setProductsData }) {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    let data = ProductsData
    let index = data.findIndex((item) => item.name == name)
    data[index].quantity += 1
    setProductsData(data)
    setQuantity(quantity + 1);
  };

  const removeFromCart = () => {
    if (quantity > 0) {
    let data = ProductsData
    let index = data.findIndex((item) => item.name == name)
    data[index].quantity -= 1
    setProductsData(data)
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bakery-product dummy-background" style={{height:'100%'}} >
     
      <img src={image} alt={name} width={300} height={200}/>
      <h3 className='d-flexcenter'>{name}</h3>
      <p className='d-flexcenter'>${price}</p>
      <div className="quantity-controls" style={{display:'flex' , justifyContent : 'space-around'}}>
        <button onClick={removeFromCart}>-</button>
        <span>{quantity}</span>
        <button onClick={addToCart}>+</button>
      </div>
    </div>
  );
}

export default BakeryProduct;