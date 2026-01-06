import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { code } = useParams();

  // دیتای نمونه (بعداً از API می‌گیری)
  const product = {
    name: "ماشین لباسشویی سامسونگ",
    price: "38,500,000 تومان",
    image: "https://via.placeholder.com/400x300",
    colors: ["سفید", "نقره‌ای", "مشکی"],
  };

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-card">
        <h1>{product.name}</h1>
        <p className="price">{product.price}</p>

        <div className="colors">
          {product.colors.map((c, i) => (
            <span key={i} className="color-chip">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
