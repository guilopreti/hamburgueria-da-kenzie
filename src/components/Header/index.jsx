import "./styles.css";

const Header = ({ pesquisa }) => {
  return (
    <header>
      <p>
        Burguer <span>Kenzie</span>
      </p>

      <div className="div-busca">
        <input placeholder="Digitar Pesquisa" id="input-placeholder" />
        <button>Pesquisar</button>
      </div>
    </header>
  );
};

export default Header;
