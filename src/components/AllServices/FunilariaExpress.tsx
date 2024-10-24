import { ImageSwiper } from "@/components/Swiper/Swiper"
import imageArray from '@/json/funilariaExpress.json'
import { Services } from "./Services"

export const FunilariaExpress = () => {
    return(
        <section className="serviceItem_section">
            <div className="funilaria_background">
                <h2>Funilaria Express</h2>
            </div>
            <div className="serviceItem_text_section">
                <h4>O que é Funilaria ou Reparos Express?</h4>
                <p>É uma técnica já conhecida na Europa como “Spot Repair”, isso significa fazer o reparo somente onde ocorreu a avaria na peça.<br/>Seu carro novo de novo, com essa técnica que mantém a originalidade do seu carro e com a solução muito mais rápida.<br/>Peça agora mesmo um orçamento para Reparos Express e se surpreenda com os benefícios.</p>
                <div className="serviceItem_second_text_section">
                    <h5>Em Quais Situações Utilizo o Reparos Express (micro-pintura) ?</h5>
                    <ul>
                        <li>Pequenas Colisões</li>
                        <li>Ralados de Para-Choque</li>
                        <li>Batidas e Ralados em Colunas de Estacionamento</li>
                        <li>Todo Tipo de Avaria que não Necessite a Intervenção de Mesa Alinhadora de Chassis.</li>
                    </ul>
                </div>
                <p>Somos especialistas em reparos Express com qualidade que impressiona nossos clientes que sempre indicam nossos serviços. Mais de 40 anos de experiência garantem um serviço impecável aqui na Crossover Autos.</p>
            </div>
            <h2>Galeria de Imagens</h2>
            <ImageSwiper DataArray={imageArray} />
            <Services />
        </section>
    )
}