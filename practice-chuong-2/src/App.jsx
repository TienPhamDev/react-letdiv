import "./App.css";
import Profile from "./component/Profile";
import Counter from "./component/Counter";
import RenderProduct from "./component/RenderProduct";
import Form from "./component/Form";
function App() {
  const products = [
    {
      name: "Tai nghe Bluetooth X200",
      price: 799000,
      image: "https://example.com/images/tai-nghe-x200.jpg",
      description: "Tai nghe không dây âm thanh sống động, pin lâu.",
    },
    {
      name: "Chuột Gaming Razer Viper",
      price: 1299000,
      image: "https://example.com/images/razer-viper.jpg",
      description: "Chuột chơi game siêu nhạy, thiết kế nhẹ.",
    },
    {
      name: "Bàn phím cơ Keychron K2",
      price: 1890000,
      image: "https://example.com/images/keychron-k2.jpg",
      description: "Bàn phím cơ gọn nhẹ, hỗ trợ Mac & Windows.",
    },
    {
      name: "Laptop Asus VivoBook 15",
      price: 15990000,
      image: "https://example.com/images/vivobook-15.jpg",
      description: "Laptop màn hình lớn, hiệu suất mạnh mẽ.",
    },
    {
      name: "Điện thoại Samsung Galaxy A54",
      price: 8990000,
      image: "https://example.com/images/galaxy-a54.jpg",
      description: "Smartphone camera đẹp, pin trâu, hiệu năng tốt.",
    },
  ];

  return (
    <>
      <Form />
      <Profile />
      <Counter />
      <RenderProduct products={products} />
    </>
  );
}

export default App;
