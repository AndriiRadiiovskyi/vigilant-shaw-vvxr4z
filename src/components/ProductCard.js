import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>{product.price} грн</p>
      <button className="btn-add" onClick={() => addToCart(product)}>
        Додати
      </button>
    </div>
  );
}
