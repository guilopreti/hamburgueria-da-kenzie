import Product from "../Product";
import "./styles.css";

const ProductsList = ({ products }) => {
  return (
    <div>
      <ul className="vitrine-produtos">
        {products.map(({ id, name, category, price, img }) => {
          return (
            <Product
              id={id}
              name={name}
              category={category}
              price={price}
              img={img}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
