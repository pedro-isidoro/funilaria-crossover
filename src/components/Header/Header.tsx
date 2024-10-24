import { useState } from "react"
import { Link } from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export const Header = () => {
  const [menuOpen, SetMenuOpen] = useState(false)
  return (
    <header className="header_section">
      <img src="/images/logo/logo-crossover.jpeg"/>
      <section className="header_second_section">
        <ul className="header_infos">
          <li className="header_infos_item"><p>Fone 1: <span>(11) 4330-0672</span></p></li>
          <li className="header_infos_item"><p>Fone 2: <span>(11) 2356-4622</span></p></li>
        </ul>
        <nav className="header_navegation">
          <Link to={"/"} className="header_navegation_item">Home</Link>
          <Link to={"/quem-nos-somos"} className="header_navegation_item">Quem Somos</Link>
          <Link to={"/"} className="header_navegation_item">Reparos</Link>
          <Link to={"/"} className="header_navegation_item">Estilização</Link>
        </nav>
        <IoMdMenu className="menuIcon" onClick={()=>SetMenuOpen(true)} />
        {menuOpen ? (
          <nav className="menu_navegation">
            <IoClose className="closeIcon" onClick={()=>SetMenuOpen(false)} />
            <div className="menu_navegation_items">
              <Link to={"/"} className="menu_navegation_item">Home</Link>
              <Link to={"/quem-nos-somos"} className="menu_navegation_item">Quem Somos</Link>
              <Link to={"/"} className="menu_navegation_item">Reparos</Link>
              <Link to={"/"} className="menu_navegation_item">Estilização</Link>
            </div>
          </nav>
        ) : (
          <></>
        )}
      </section>
    </header>
  )
}