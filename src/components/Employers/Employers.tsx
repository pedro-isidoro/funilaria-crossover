import { FaInstagram, FaWhatsapp  } from "react-icons/fa";
export const Employers = () => {
    return(
        <section className="section_employers">
        <div className="employer_card">
          <img src="/images/donos/Foto-minha.webp" alt="Employer Image 1" />
          <div className="employer_card_texts">
            <h4>Sócio 1</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio. Molestias eaque sunt distinctio omnis maiores, dolores quis, ipsa quam placeat nisi excepturi quibusdam aspernatur iure commodi facere error nulla?</p>
          </div>
          <ul className="employer_card_nets">
            <li className="employer_card_net_item"><a href="http://" target="_blank" className="instagram Link"><FaInstagram className="insta"/></a></li>
            <li className="employer_card_net_item"><a href="http://" target="_blank" className="Whats Link"><FaWhatsapp className="whats"/></a></li>
          </ul>
        </div>
        <div className="employer_card">
          <img src="/images/donos/Foto-minha.webp" alt="Employer Image 2" />
          <div className="employer_card_texts">
            <h4>Sócio 2</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, distinctio. Molestias eaque sunt distinctio omnis maiores, dolores quis, ipsa quam placeat nisi excepturi quibusdam aspernatur iure commodi facere error nulla?</p>
          </div>
          <ul className="employer_card_nets">
            <li className="employer_card_net_item"><a href="http://" target="_blank" className="instagram Link"><FaInstagram className="insta"/></a></li>
            <li className="employer_card_net_item"><a href="http://" target="_blank" className="Whats Link"><FaWhatsapp className="whats"/></a></li>
          </ul>
        </div>
      </section>
    )
}