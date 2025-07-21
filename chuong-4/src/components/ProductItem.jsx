import React, { useContext } from "react";
import CartContext from "./CartContent";

const ProductItem = ({ product }) => {
  const { cartItemCount, setCartItemCount } = useContext(CartContext);
  return (
    <div>
      <div>Ten : {product.name}</div>
      <div>Gia : {product.price}</div>
      <button
        onClick={() => {
          setCartItemCount(cartItemCount + 1);
        }}
      >
        Them gio hang
      </button>
    </div>
  );
};

export default ProductItem;
