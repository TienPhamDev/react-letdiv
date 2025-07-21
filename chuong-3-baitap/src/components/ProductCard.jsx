import "./ProductCard.css";
function ProductCard({ product }) {
  return (
    <div className="Product">
      <div>{product.image}</div>
      <div>
        <h1>{product.name}</h1>
        <p>Gia : {product.price}</p>
        <button>Xem chi tiet</button>
      </div>
    </div>
  );
}

export default ProductCard;
