import React, { useContext } from "react";
import CartContext from "./CartContent";

const CartBagde = () => {
  const { cartItemCount, setCartItemCount } = useContext(CartContext);
  return <div>Gio hang : {cartItemCount}</div>;
};

export default CartBagde;
