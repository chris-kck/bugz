import { useState } from "react";
import "./App.css";
import Navbar from "./pages/common/navbar";
import Home from "./pages/home/home";

function App() {
  const [products, setProducts] = useState({});

  // Collect all the elements form the backedn
  return (
    <div className="content">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
