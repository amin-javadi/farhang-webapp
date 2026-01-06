import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScanPage from "./pages/ScanPage";
import ProductPage from "./pages/ProductPage";
import "./styles/app.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScanPage />} />
          <Route path="/product/:code" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
