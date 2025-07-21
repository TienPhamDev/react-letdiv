import React from "react";
import ProductItem from "./ProductItem";
const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 4", price: 400 },
  { id: 5, name: "Product 5", price: 500 },
];
const ProductList = () => {
  return (
    <div>
      <h2>danh sach san pham</h2>
      {products.map((item) => {
        return <ProductItem key={item.id} product={item} />;
      })}
    </div>
  );
};

export default ProductList;
