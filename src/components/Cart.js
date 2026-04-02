import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container cart">
      <h2>Корзина</h2>

      {cart.length === 0 && <p>Корзина пуста</p>}

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <span>
            {item.name} - {item.price} грн
          </span>
          <button
            className="btn-remove"
            onClick={() => removeFromCart(item.id)}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}
