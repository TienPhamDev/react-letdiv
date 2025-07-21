import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
// const productsData = [
//   {
//     id: 1,
//     name: "Áo thun nam",
//     price: 199000,
//     image: "https://example.com/images/ao-thun-nam.jpg",
//   },
//   {
//     id: 2,
//     name: "Giày thể thao",
//     price: 499000,
//     image: "https://example.com/images/giay-the-thao.jpg",
//   },
//   {
//     id: 3,
//     name: "Balo thời trang",
//     price: 299000,
//     image: "https://example.com/images/balo-thoi-trang.jpg",
//   },
// ];
const productsData = [
  { id: 1, name: "Laptop XYZ", price: 1200, stock: 15 },
  { id: 2, name: "Điện thoại ABC", price: 800, stock: 0 },
  { id: 3, name: "Máy tính bảng DEF", price: 500, stock: 20 },
];
function App() {
  const [count, setCount] = useState(0);

  return <>{/* <ProductList products={productsData} /> */}</>;
}

export default App;
