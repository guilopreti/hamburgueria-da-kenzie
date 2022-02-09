import "./styles.css";

const Button = ({ children, secondaryColor = false }) => {
  return (
    <button className={secondaryColor ? "button__grey" : "button__green"}>
      {children}
    </button>
  );
};

export default Button;
