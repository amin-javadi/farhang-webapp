import { useNavigate } from "react-router-dom";

export default function ScanPage() {
  const navigate = useNavigate();

  // شبیه‌سازی اسکن موفق
  const handleFakeScan = () => {
    navigate("/product/123456");
  };

  return (
    <div className="scan-page">
      <header className="header">Shop Scanner</header>

      <div className="camera-box">
        <div className="scan-frame"></div>
      </div>

      <p className="hint">بارکد را داخل کادر بگیرید</p>

      <button className="scan-btn" onClick={handleFakeScan}>
        شبیه‌سازی اسکن
      </button>
    </div>
  );
}
