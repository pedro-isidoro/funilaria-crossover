import { FaInstagram, FaWhatsapp, FaRegCopyright  } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer_section">
      <section className="footer_first_section">
        <Link to={"/"} className="Image_section">
          <img src="/images/logo/CR.webp" alt="logo Image"/>
        </Link>
        <nav className="footer_navegation">
          <Link to={"/"} className="footer_navegation_item">Home</Link>
          <Link to={"/quem-nos-somos"} className="footer_navegation_item">Quem Somos</Link>
          <a href="#services"  className="footer_navegation_item">Reparos</a>
          <a href="#services"  className="footer_navegation_item">Estilização</a>
          <Link to={"/enderecos"} className="footer_navegation_item">Endereços</Link>
        </nav>
        <div className="footer_second_section">
          <ul className="nets">
            <li className="net_item"><a href="https://www.instagram.com/crossoverautos/" target="_blank" className="instagram Link"><FaInstagram className="insta"/></a></li>
            <li className="net_item"><a href="https://api.whatsapp.com/send?phone=5511976316322&text=Olá%20Cross%20Over%20-%20Funilaria%20Express%20%20e%20Estética%20Automotiva%2C%20eu%20preciso%20de%20mais%20informações%20sobre%3A" target="_blank" className="whtatsApp Link"><FaWhatsapp className="whats"/></a></li>
          </ul>
        </div>
      </section>
      <section className="footer_finalText_section">
        <p><FaRegCopyright className="CopyRightIcon"/>TODOS OS DIREITOS RESERVADOS - 2024</p>
      </section>
    </footer>
  )
}
