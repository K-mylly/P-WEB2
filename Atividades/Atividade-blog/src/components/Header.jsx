import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Meu Blog</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;