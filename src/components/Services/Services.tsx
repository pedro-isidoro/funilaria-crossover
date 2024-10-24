import { Link } from "react-router-dom";
import { FaCar, FaCarCrash, FaAirFreshener } from "react-icons/fa";
import { FaCarOn } from "react-icons/fa6";
import { GiPaintRoller, GiVacuumCleaner, GiShieldReflect  } from "react-icons/gi";

export const Services = () => {
    return (
        <section className="section_services">
        <ul className="services_list">
          <li className="services_list_service"><FaCar className="carIcon1"/><p>Funilária<br/>Express</p><Link to={"/"} className="link_know_more">Saiba Mais</Link></li>
          <li className="services_list_service"><GiPaintRoller className="carIcon2"/><p>Micro<br/>Pintura</p><Link to={"/"} className="link_know_more">Saiba Mais</Link></li>
          <li className="services_list_service"><FaCarOn className="carIcon3"/><p>Polimento</p><Link to={"/"} className="link_know_more">Saiba Mais</Link></li>
          <li className="services_list_service"><GiShieldReflect className="carIcon4"/><p>Vitrificação</p><Link to={"/"} className="link_know_more">Saiba Mais</Link></li>
          <li className="services_list_service"><GiVacuumCleaner  className="carIcon5"/><p>Higienização</p><Link to={"/"} className="link_know_more">Saiba Mais</Link></li>
          <li className="services_list_service"><FaCarCrash className="carIcon6"/><p>Martelinho<br/>de<br/>Ouro</p><Link to={"/"} className="link_know_more">Saiba Mais</Link></li>
          <li className="services_list_service"><FaAirFreshener className="carIcon7"/><p>Higienização<br/>com<br/>Ozônio</p><Link to={"/"} className="link_know_more">Saiba Mais</Link></li>
        </ul>
      </section>
    )
}