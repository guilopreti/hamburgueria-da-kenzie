import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((resp) => resp.json())
      .then((resp) => setProducts(resp))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
