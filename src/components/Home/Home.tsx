import { Employers } from "@/components/Employers/Employers";
import { Reviews } from "@/components/Reviews/Reviews";
import { Reviews2 } from "@/components/Reviews/Reviews2";
import { Services } from "@/components/AllServices/Services";
import { ClietsLogo } from "@/components/ClietsLogo/ClietsLogo";
import clientsData from "@/json/ClientsLogo.json"
import { PartnersLogo } from "@/components/PartnersLogo/PartnersLogo";
import partnersData from "@/json/partnersLogo.json"
import { TeamFunilariaExpress } from "../Team/Team";

export const Home = () => {

  return (
    <section className="home_container">
      <section className="section_introducing">
        <h2>AGENDE AGORA O SEU REPARO EXPRESS</h2>
        <h2>SEU CARRO PRONTO NO MESMO DIA <span>*</span></h2>
        {/* <h2>SERVIÇOS ESPECIALIZADOS EM FUNILARIA EXPRESS</h2>
        <p>Temos os melhores profissionais do mercado e tecnologia de ponta, com homologação de grandes empresas e parceiros como a 3M e a PPG</p> */}
      </section>
      <h2 className="employers_title">Donos</h2>
      <Employers />
      <h2 className="services_title">Serviços</h2>
      <Services />
        <h2 className="reviews_title">Comentários</h2>
      <Reviews />
      <Reviews2 />
      <ClietsLogo items={clientsData} />
      <PartnersLogo items={partnersData} />
      <TeamFunilariaExpress />
    </section>
  )
}