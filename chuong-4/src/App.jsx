import { useEffect, useRef, useState } from "react";

import "./App.css";
import ProductList from "./components/ProductList";
import CartContext from "./components/CartContent";
import Layout from "./components/Layout";
import StopWatch from "./components/StopWatch";
import ElementSizeMeasurer from "./components/ElementSizeMeasurer";

const CartProvider = ({ children }) => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const carValue = { cartItemCount, setCartItemCount };
  return (
    <CartContext.Provider value={carValue}>{children}</CartContext.Provider>
  );
};
function App() {
  // const AddToCartButton = () => {
  //   return (
  //     <CartContext.Consumer>
  //       {({ cartItemCount, setCartItemCount }) => {
  //         return (
  //           <button onClick={() => setCartItemCount(cartItemCount + 1)}>
  //             Add to cart
  //           </button>
  //         );
  //       }}
  //     </CartContext.Consumer>
  //   );
  // };
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  // const increaseCounter = () => {
  //   countRef.current++;
  //   console.log("Gia tri hien tai", countRef.current);
  // };
  const inputRef = useRef(null);
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);
  // const focusInput = () => {
  //   inputRef.current.focus();
  // };
  const StartCount = () => {
    countRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  const StopCount = () => {
    clearInterval(countRef.current);
  };
  const handleSave = () => {
    console.log("Gia tri: ", inputRef.current.value);
  };
  return (
    <>
      {/* <input ref={inputRef} type="text" placeholder="nhap gi do" />
      <button onClick={increaseCounter}>Tang</button>
      <input ref={inputRef} type="text" placeholder="focus vao input" />
      <button onClick={focusInput}>focus vao input</button> */}

      {/* <input type="text" ref={inputRef} placeholder="nhap gi do di ban oi" />
      <button onClick={handleSave}>save</button>
      <h1 ref={countRef}>{count}</h1>
      <button onClick={StartCount}>bat dau</button>
      <button onClick={StopCount}>ket thuc</button> */}
      <CartProvider>
        {/* <AddToCartButton /> */}
        {/* <ProductList /> */}
        <Layout />
        <StopWatch />
        <ElementSizeMeasurer />
      </CartProvider>
    </>
  );
}

export default App;
