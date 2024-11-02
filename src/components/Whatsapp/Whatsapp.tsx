import { FaWhatsapp } from "react-icons/fa";
export const WhatsApp = () => {
    return(
        <section className="whatsapp">
            <a href="https://api.whatsapp.com/send?phone=5511976316322&text=Olá%20Cross%20Over%20-%20Funilaria%20Express%20%20e%20Estética%20Automotiva%2C%20eu%20preciso%20de%20mais%20informações%20sobre%3A" target="_blank" aria-label="Folow us in our social media">
                <FaWhatsapp className="whatsButton" />
            </a>
            <p>1</p>
        </section>
    );
};