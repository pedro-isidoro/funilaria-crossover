import { ImageSwiper } from "@/components/Swiper/Swiper"
import imageArray from '@/json/microRetoque.json'
import { Services } from "./Services"
import { GsapServicesFunction } from "@/ts/GsapServicesFunction"

export const MicroPintura = () => {
    GsapServicesFunction({trigger: ".serviceItem_text_section"})
    return (
        <section className="serviceItem_section">
            <div className="microPintura_background">
                <h2>Micro Retoque</h2>
            </div>
            <div className="serviceItem_text_section">
                <div className="serviceItem_second_text_section">
                    <h5>Micro pintura, micro retoque ou micro riscos?</h5>
                </div>
                <div className="serviceItem_third_text_section">
                    <h5>Micro pintura e micro retoque é a mesma técnica ou processo usado.</h5>
                    <p>Nesse caso é feito 5 etapas de processo.</p>
                    <ul>
                        <li>Lixamento localizado para corrigir o risco com lixa de baixo abrasivo.</li>
                        <li>Aplicação localizado de primer para enchimento e nivelamento da superfície.</li>
                        <li>Aplicação da tinta com pistola própria para pequeno reparos em um espaço de 10 cm. Aproximadamente.</li>
                        <li>Aplicação do verniz de alta qualidade (secagem outra rápido). Que permite entregar seu carro no MESMO DIA.</li>
                        <li>Mata retoque para aderência (Fuzão) entre o verniz aplicado e o já existente dando um perfeito acabamento sem deixar marcar ou emenda entre as partes.<br/>Deixando o acabamento 100%.</li>
                    </ul>
                </div>
                <div className="serviceItem_second_text_section">
                    <h5>Micro Riscos</h5>
                    <p>Esse processo é feito com caneta aerógrafo.<br/>É preciso das peças onde está o risco a ser reparado estar polido e livre de impurezas.<br/>Com a caneta se faz o enchimento localizado várias vezes até igualar a superfície.<br/>Após esse processo se faz o polimento novamente.<br/>A qualidade fica por volta de 60% percebe-se uma linha do risco bem fininha, ou seja não fica perfeito.<br/>Geralmente quem opta por esse reparos são os lojista que tem baixo custo e acaba maquiando a pintura.<br/>Esse processo não é recomendado para quem é "chato" com carro.</p>
                </div>
                <div className="serviceItem_second_text_section">
                    <h5>Conclusão</h5>
                    <p>A micro pintura na Crossover Autos é a escolha perfeita para quem busca eficiência, economia e qualidade.<br/>Com técnicos experientes e uma abordagem focada na precisão, garantimos a melhor solução para pequenos danos no seu veículo.<br/>Visite-nos e comprove a excelência do nosso trabalho!</p>
                </div>
            </div>
            <h2>Galeria de Imagens</h2>
            <ImageSwiper DataArray={imageArray} />
            <Services />
        </section>
    )
}