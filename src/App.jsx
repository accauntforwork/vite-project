import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Card from "./pages/Card";

function App() {
  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className="max-w-[90rem] m-auto px-48">
        <Routes>
          <Route index={true} path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
