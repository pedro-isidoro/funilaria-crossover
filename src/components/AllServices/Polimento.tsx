import { ImageSwiper } from "@/components/Swiper/Swiper"
import imageArray from '@/json/funilariaExpress.json'
import { Services } from "./Services"
import { GsapServicesFunction } from "@/ts/GsapServicesFunction"

export const Polimento = () => {
    GsapServicesFunction({trigger: ".serviceItem_text_section"})
    return(
        <section className="serviceItem_section">
            <div className="polimento_background">
                <h2>Polimento Técnico</h2>
            </div>
            <div className="serviceItem_text_section">
                <p>O Polimento e Espelhamento Crossover Autos, é um verdadeiro Salão de Beleza para o seu veículo em todo o ABCD, uma forma de manter o seu veículo como novo revitalizando, protegendo e embelezando, essencial para quem é apaixonado por carro.<br/><br/>A 3M desenvolveu um sistema especial de polimento para recuperar o brilho e remover riscos superficiais, manchas, oxidação e outros defeitos da pintura dos automóveis. O tratamento deixa o carro com um brilho perfeito e proteção duradoura (até 06 meses ou 20 lavagens).<br/><br/>Depois que a pintura do automóvel se transformar num verdadeiro espelho, o trabalho se completa com a técnica dos nossos profissionais que com a sua experiência vão deixar seu carro incrível.</p>
                <div className="serviceItem_third_text_section">
                    <h5>Polimento técnico ou polimento convencional?</h5>
                    <p>No polimento técnico primeiro é avaliado o estado da pintura com lâmpada especial se há a necessidade de entrar com todas as setups (processo) de polimento.</p>
                    <ul>
                        <li>Corte, com espuma abrasiva.</li>
                        <li>Refino, com espuma soft.</li>
                        <li>3 brilho com espuma super soft.<br/>Todo setup com máquina roto orbital, uma inovação para evitar marcas como teia de aranha e outras manchas.</li>
                        <li>Por último a aplicação de proteção da pintura.<br/>Vitrificador, literalmente vidro líquido que da proteção por 3 anos protegendo contra riscos, excrementos de pássaros e Intempéries do tempo.</li>
                    </ul>
                </div>
                <div className="serviceItem_second_text_section">
                    <h5>Espelhamento ou Cristalizaçâo?</h5>
                    <p>
                        Ambos são a mesma coisa propriamente dito.<br/>A tempos atrás usava-se o mesmo nome de cristalização.<br/>Com o avanço da tecnologia e melhoria dos produtos especialmente pela 3M que lançou uma cera que se deu o nome de pasta wax que da intenso brilho e aspecto de espelho, por isso o nome espelhamento.
                    </p>
                </div>
            </div>
            <h2>Galeria de Imagens</h2>
            <ImageSwiper DataArray={imageArray} />
            <Services />
        </section>
    )
}