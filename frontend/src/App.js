import "./App.css";
import { Navbar } from "./Components/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Products from "./Pages/Products";
import Card from "./Pages/Card";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
function App() {
  return (
    <BrowserRouter>
      {" "}
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path="/product" element={<Products />}>
          <Route path=":productId" element={<Products />} />
        </Route>
        <Route path="/card" element={<Card />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
