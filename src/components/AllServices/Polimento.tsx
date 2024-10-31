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
                <div className="serviceItem_second_text_section">
                    <h5>O Polimento e Espelhamento 3M no ABCD, feito pela Crossover Autos, transforma a pintura do seu veículo em um verdadeiro espelho.</h5>
                    <p><span>Aplicações: </span>Permite eliminar defeitos na pintura do automóvel, tais como riscos superficiais, manchas, oxidação, entre outros.</p>
                </div>
                <div className="serviceItem_third_text_section">
                    <h5>Em Quais Situações Utilizo o Polimento e Espelhamento Crossover Autos/3M ?</h5>
                    <ul>
                        <li>Recuperação do Brilho da Pintura</li>
                        <li>Remoção de Hologramas (marcas de pano em forma de círculos)</li>
                        <li>Proteção da Pintura para Evitar o Desgaste do Tempo</li>
                        <li>Embelezamento do seu Veículo para Utilização do dia a dia ou até mesmo para a Venda.</li>
                    </ul>
                </div>
                <div className="serviceItem_third_text_section">
                    <h5>As vantagens de utilizar os produtos de Estética Automotiva:</h5>
                    <ul>
                        <li>Revitaliza a Pintura do seu veículo deixando ele como 0km novamente.</li>
                        <li>Proteção de Pintura do seu veículo com Produtos como (Soft99 e Nano Titanium).</li>
                        <li>Veículo como novo por muito mais tempo.</li>
                        <li>A Venda do seu Veículo fica muito mais Atrativa quando o Veículo está com Aparência de Novo.​</li>
                    </ul>
                </div>
                <div className="serviceItem_second_text_section">
                    <p>Agora que você já sabe das principais vantagens da Estética Automotiva realizada pela Crossover Autos agende uma hora para o seu carro ficar ainda mais bonito e valorizado.</p>
                </div>
            </div>
            <h2>Galeria de Imagens</h2>
            <ImageSwiper DataArray={imageArray} />
            <Services />
        </section>
    )
}