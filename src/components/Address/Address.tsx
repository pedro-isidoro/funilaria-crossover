import { Services } from "@/components/AllServices/Services"
import { GsapServicesFunction } from "@/ts/GsapServicesFunction"

export const Address = () => {
    GsapServicesFunction({trigger: ".address_section"})
    return (
        <section className="address_section">
            <h2>Endereços</h2>
            <div className="addresses">
                <div className="first_address">
                    <h3>Loja 1 </h3>
                    <p>R. Santa Filomena, 66 – Centro<br/>São Bernardo do Campo<br/>Fone: (11) 4330-0672</p>
                    <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14613.264210384883!2d-46.55125351399209!3d-23.7004050569545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce422d89e82f65%3A0x56c38560346a4fbe!2sR.%20Santa%20Filomena%2C%2066%20-%20Centro%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009710-060!5e0!3m2!1spt-BR!2sbr!4v1729787500120!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="map_iframe" />
                </div>
                <div className="second_address">
                    <h3>Loja 2 </h3>
                    <p>Avenida Paulo Afonso, 756 B. – Nova Petrópolis<br />São Bernardo do Campo<br />Fone: (11) 2356-4616</p>
                    <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14612.411816009095!2d-46.54398705894437!3d-23.70801721431931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4188167facb5%3A0x8d703f9fcc94189!2sAv.%20Paulo%20Afonso%2C%20756%20-%20Nova%20Petr%C3%B3polis%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009770-351!5e0!3m2!1spt-BR!2sbr!4v1729788267059!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="map_iframe" />
                </div>
            </div>
            <div className="address_services_section">
                <h2>Serviços</h2>
                <Services />
            </div>
        </section>
    )
}