import { FaInstagram, FaWhatsapp  } from "react-icons/fa";
export const Employers = () => {
    return(
        <section className="section_employers">
        <div className="employer_card">
          <img src="/images/donos/Foto-minha.webp" alt="Employer Image 1" />
          <div className="employer_card_texts">
            <h2>Sócio 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio. Molestias eaque sunt distinctio omnis maiores, dolores quis, ipsa quam placeat nisi excepturi quibusdam aspernatur iure commodi facere error nulla?</p>
          </div>
          <ul className="employer_card_nets">
            <li className="employer_card_net_item"><a href="https://www.instagram.com/crossoverautos/" target="_blank" className="instagram Link"><FaInstagram className="insta" aria-label="Folow us in our social media"/></a></li>
            <li className="employer_card_net_item"><a href="https://api.whatsapp.com/send?phone=5511976316322&text=Olá%20Cross%20Over%20-%20Funilaria%20Express%20%20e%20Estética%20Automotiva%2C%20eu%20preciso%20de%20mais%20informações%20sobre%3A" target="_blank" className="Whats Link" aria-label="Send us a message about your problem"><FaWhatsapp className="whats"/></a></li>
          </ul>
        </div>
        <div className="employer_card">
          <img src="/images/donos/Foto-minha.webp" alt="Employer Image 2" />
          <div className="employer_card_texts">
            <h2>Sócio 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio. Molestias eaque sunt distinctio omnis maiores, dolores quis, ipsa quam placeat nisi excepturi quibusdam aspernatur iure commodi facere error nulla?</p>
          </div>
          <ul className="employer_card_nets">
            <li className="employer_card_net_item"><a href="https://www.instagram.com/crossoverautos/" target="_blank" className="instagram Link" aria-label="Folow us in our social media"><FaInstagram className="insta" /></a></li>
            <li className="employer_card_net_item"><a href="https://api.whatsapp.com/send?phone=5511976316322&text=Olá%20Cross%20Over%20-%20Funilaria%20Express%20%20e%20Estética%20Automotiva%2C%20eu%20preciso%20de%20mais%20informações%20sobre%3A" target="_blank" className="Whats Link" aria-label="Send us a message about your problem"><FaWhatsapp className="whats"/></a></li>
          </ul>
        </div>
      </section>
    )
}