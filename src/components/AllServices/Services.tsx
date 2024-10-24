import { Link } from "react-router-dom";
import { FaCar, FaCarCrash, FaAirFreshener } from "react-icons/fa";
import { FaCarOn } from "react-icons/fa6";
import { MdCarCrash } from "react-icons/md";
import { GiPaintRoller, GiVacuumCleaner, GiShieldReflect  } from "react-icons/gi";

export const Services = () => {
    return (
        <section id="services" className="section_services">
        <ul className="services_list">
          <li className="services_list_service"><FaCar className="carIcon1"/><p>Funilária<br/>Express</p><Link to={"/servicos/funilaria-express"} className="link_know_more">Saiba Mais</Link></li>
          <li className="services_list_service"><GiPaintRoller className="carIcon2"/><p>Micro<br/>Pintura</p><Link to={"/servicos/micro-pintura"} className="link_know_more">Saiba Mais</Link></li>
          <li className="services_list_service"><MdCarCrash className="carIcon3"/><p>Para Choque</p><Link to={"/servicos/para-choque"} className="link_know_more">Saiba Mais</Link></li>
          <li className="services_list_service"><FaCarOn className="carIcon3"/><p>Polimento</p><Link to={"/servicos/polimento"} className="link_know_more">Saiba Mais</Link></li>
          <li className="services_list_service"><GiShieldReflect className="carIcon4"/><p>Vitrificação</p><Link to={"/servicos/vitrificacao"} className="link_know_more">Saiba Mais</Link></li>
          <li className="services_list_service"><GiVacuumCleaner  className="carIcon5"/><p>Higienização</p><Link to={"/servicos/higienizacao"} className="link_know_more">Saiba Mais</Link></li>
          <li className="services_list_service"><FaCarCrash className="carIcon6"/><p>Martelinho<br/>de<br/>Ouro</p><Link to={"/servicos/martelinho-de-ouro"} className="link_know_more">Saiba Mais</Link></li>
          <li className="services_list_service"><FaAirFreshener className="carIcon7"/><p>Higienização<br/>com<br/>Ozônio</p><Link to={"/servicos/higienizacao-com-ozonio"} className="link_know_more">Saiba Mais</Link></li>
        </ul>
      </section>
    )
}