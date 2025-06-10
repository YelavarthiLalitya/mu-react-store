import React from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom";


export default function Home() {
    const Navigate = useNavigate();
    const addToCart = () =>{
      Navigate("/cart")
    }
  const products = [
    {
      id: 1,
      name: "Product 1",
      desc: "This is the description of the product.",
      price: 45,
      imgUrl: "https://picsum.photos/id/237/300/300"

    },
    {
      id: 2,
      name: "Product 2",
      desc: "This is the description of the product.",
      price: 47,
      imgUrl: "https://picsum.photos/id/236/300/300"

    },
    {
      id: 3,
      name: "Product 3",
      desc: "This is the description of the product.",
      price: 49,
      imgUrl: "https://picsum.photos/id/235/300/300"
    }
  ];

  return (
    <div className="App-Home-Row">
      {products.map(product => (
        <div key={product.id}>
          <img src={product.imgUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
