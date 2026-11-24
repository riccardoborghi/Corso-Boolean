import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/prodotti" element={<ProductsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
