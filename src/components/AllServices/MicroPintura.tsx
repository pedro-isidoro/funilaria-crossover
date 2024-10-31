import { ImageSwiper } from "@/components/Swiper/Swiper"
import imageArray from '@/json/funilariaExpress.json'
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
                <p>A micro pintura é uma técnica revolucionária no mundo da restauração automotiva, e a Crossover Autos se destaca nessa área graças à sua expertise e precisão.<br/>Esta técnica inovadora é a solução ideal para reparos rápidos e eficientes, especialmente quando se trata de arranhões ou pequenas avarias no seu veículo.</p>
                <div className="serviceItem_second_text_section">
                    <h5>Tecnologia de Ponta para um Resultado Preciso</h5>
                    <p>O segredo da micro pintura está na sua precisão.<br/>Diferente dos métodos tradicionais, que muitas vezes exigem a repintura de uma área extensa do veículo, a micro pintura foca exclusivamente no local afetado.<br/>Isso não só economiza tempo e recursos, mas também mantém a integridade e a originalidade da peça do carro.</p>
                </div>
                <div className="serviceItem_second_text_section">
                    <h5>Economia e Manutenção da Originalidade</h5>
                    <p>O ponto alto desta técnica é o fato dela corrigir apenas o local afetado, excluindo a necessidade de pintar toda a peça do veículo – atividade que encareceria o serviço e retiraria da parte modificada seu aspecto de originalidade. E a Crossover Autos faz isso com muita qualidade graças à experiência dos seus profissionais.</p>
                </div>
                <div className="serviceItem_second_text_section">
                    <h5>Profissionais Experientes para um Serviço de Excelência</h5>
                    <p>Na Crossover Autos, contamos com uma equipe de especialistas altamente qualificados no campo da micro pintura.<br/>Eles possuem uma vasta experiência e são treinados para identificar a cor exata e o tipo de acabamento necessário para cada reparo, garantindo um resultado indistinguível do original.</p>
                </div>
                <div className="serviceItem_third_text_section">
                    <h5>Benefícios da Micro Pintura</h5>
                    <p>A micro pintura é ideal para pequenos reparos, como arranhões ou lascas na pintura. Ela oferece diversos benefícios:</p>
                    <ul>
                        <li><span>Rapidez no Serviço: </span>Reparos feitos em tempo reduzido, sem a necessidade de deixar o carro na oficina por dias.</li>
                        <li><span>Custo-benefício: </span>É uma opção mais econômica, pois evita a repintura de grandes áreas.</li>
                        <li><span>Preservação da Originalidade: </span>Mantém a autenticidade e o valor do seu veículo, sem alterações drásticas na pintura original.</li>
                    </ul>
                </div>
                <div className="serviceItem_second_text_section">
                    <h5>Compromisso com a Qualidade</h5>
                    <p>Na Crossover Autos, nosso compromisso é entregar um serviço que não apenas atende, mas supera as expectativas dos nossos clientes.<br/>Com a micro pintura, oferecemos uma solução rápida, eficaz e de alta qualidade, assegurando que seu carro saia de nossa oficina em condições impecáveis.</p>
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