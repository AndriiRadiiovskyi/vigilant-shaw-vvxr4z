import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header>
      <div>🛍 Tech Store</div>
      <div>Товарів у корзині: {cart.length}</div>
    </header>
  );
}
