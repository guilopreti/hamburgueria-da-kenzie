import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentSale, setCurrentSale] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((resp) => resp.json())
      .then(function (resp) {
        setFilteredProducts(resp);
        setProducts(resp);
      })
      .catch((err) => console.log(err));
  }, []);

  const showProducts = (value) => {
    const fillProducts = products.filter(({ name, category }) => {
      return (
        name.toLowerCase().includes(value.toLowerCase()) ||
        category.toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredProducts(fillProducts);
  };

  const handleClick = (idProduct) => {
    const existProduct = currentSale.find(({ id }) => {
      return id === idProduct;
    });

    if (!existProduct) {
      const buyProduct = products.find(({ id }) => {
        return id === idProduct;
      });
      setCurrentSale([...currentSale, buyProduct]);
    }
  };

  const deleteOneSale = (idDelete) => {
    const actualSales = currentSale.filter(({ id }) => {
      return id !== idDelete;
    });

    setCurrentSale(actualSales);
  };

  const deleteAllSales = () => {
    setCurrentSale([]);
  };

  const changeSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className="App">
      <Header showProducts={showProducts} changeSearch={changeSearch} />
      <main>
        <ProductsList
          filteredProducts={filteredProducts}
          search={search}
          handleClick={handleClick}
          currentSale={currentSale}
        />
        <Cart
          currentSale={currentSale}
          deleteAllSales={deleteAllSales}
          deleteOneSale={deleteOneSale}
        />
      </main>
    </div>
  );
}

export default App;
