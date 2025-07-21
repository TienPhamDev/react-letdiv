import React, { useState } from "react";
import ComponentA from "./ComponentA";

const MyComponent = () => {
  let content;
  const [count, setCount] = useState(0);
  const isLogin = false;
  // if (!isLogin) {
  //   content = "Vui long dang nhap";
  // } else {
  //   content = "Chao mung ban den voi trang web cua chung toi";
  // }
  let userName = "";
  return (
    <>
      <button>tang</button>
      <h1>Xin chao {userName || "Khach"}</h1>
      <div>
        {isLogin ? (
          <div>Vui long dang nhap</div>
        ) : (
          <div>Chao mung ban den voi trang web cua chung toi</div>
        )}
      </div>
      <ComponentA />
    </>
  );
};

export default MyComponent;
