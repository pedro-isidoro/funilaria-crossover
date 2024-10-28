import { FaInstagram, FaWhatsapp  } from "react-icons/fa";
import gsap from "gsap";
import { useLayoutEffect } from "react";
export const Employers = () => {
   useLayoutEffect(()=>{
        gsap.fromTo(".first_card", {
            opacity: 0,
            y: -340,
        },{
            opacity:1,
            y: 0,
        })
        .duration(1.5)
        gsap.fromTo(".second_card", {
            opacity: 0,
            y: -340,
        },{
            opacity:1,
            y: 0,
        })
        .duration(1.5)

        return ()=>{
            gsap.killTweensOf(".first_card")
            gsap.killTweensOf(".second_card")
        }
    }, [])
    return(
        <section className="section_employers">
        <div className="employer_card first_card">
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
        <div className="employer_card second_card">
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