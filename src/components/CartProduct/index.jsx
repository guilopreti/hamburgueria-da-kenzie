import Button from "../Button";
import "./styles.css";

const CartProduct = ({ img, name, category, id }) => {
  return (
    <li key={id} className="product-cart">
      <figure>
        <img
          src={img}
          alt={name}
          className={
            category === "Sanduíches"
              ? "imagem__sanduba--cart"
              : name === "Milkshake Ovomaltine"
              ? "imagem__milkshake--cart"
              : "imagem__refris--cart"
          }
        />
        <figcaption>{name}</figcaption>
      </figure>
      <div>
        <h2>{name}</h2>
        <span>{category}</span>
      </div>
      <span className="remover__produtosCart">Remover</span>
    </li>
  );
};

export default CartProduct;
