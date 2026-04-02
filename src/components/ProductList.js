import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "iPhone 13", price: 32000 },
  { id: 2, name: "Samsung Galaxy S21", price: 28000 },
  { id: 3, name: "Xiaomi Redmi Note 11", price: 9000 },
  { id: 4, name: "MacBook Air M1", price: 42000 },
  { id: 5, name: "ASUS ROG Laptop", price: 55000 },
  { id: 6, name: "Навушники AirPods Pro", price: 8000 },
  { id: 7, name: "Sony WH-1000XM4", price: 12000 },
  { id: 8, name: "Смарт-годинник Apple Watch", price: 15000 },
  { id: 9, name: "Клавіатура механічна", price: 2500 },
  { id: 10, name: "Мишка Logitech", price: 1500 },
  { id: 11, name: "Монітор Samsung 24''", price: 7000 },
  { id: 12, name: "PlayStation 5", price: 25000 },
  { id: 13, name: "Xbox Series X", price: 23000 },
  { id: 14, name: "Колонка JBL", price: 3000 },
  { id: 15, name: "PowerBank 20000mAh", price: 1200 },
];

export default function ProductList() {
  return (
    <div className="container">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
