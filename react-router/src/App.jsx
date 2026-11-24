import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/prodotti" element={<ProductsPage />} />
          <Route path="/prodotti/:id" element={<ProductPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;