import Product from "../Product";
import "./styles.css";

const ProductsList = ({ filteredProducts, search, handleClick }) => {
  return (
    <div>
      {search !== "" && (
        <p className="resultado-busca">
          Resultados para: <span>{search}</span>
        </p>
      )}
      <ul className="vitrine-produtos">
        {filteredProducts.map(({ id, name, category, price, img }) => {
          return (
            <Product
              id={id}
              name={name}
              category={category}
              price={price}
              img={img}
              handleClick={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
