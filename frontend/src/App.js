import "./App.css";
import { Navbar } from "./Components/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Products from "./Pages/Products";
import Card from "./Pages/Card";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* Wrap your entire application with BrowserRouter */}
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="mens" />} />
        <Route path="/womens" element={<ShopCategory category="womens" />} />
        <Route path="/kids" element={<ShopCategory category="kids" />} />
        <Route path="/product" element={<Products />}>
          {/* <Route path="/:productId" element={<Products />} /> */}
        </Route>
        <Route path="/card" element={<Card />} />
        {/* Ensure the loginSignup component is imported and defined */}
        {/* <Route path="/login" element={<loginSignup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
