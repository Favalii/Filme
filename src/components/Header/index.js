import './header.css';
import { Link } from 'react-router-dom'

function Header(){
  return(
    <header>
      <Link className="logo" to="/">Flix Filmes</Link>
      <Link className="favoritos" to="/favoritos">Minha Área</Link>
    </header>
  )
}

export default Header;