import { ImageSwiper } from "@/components/Swiper/Swiper"
import imageArray from '@/json/funilariaExpress.json'
import { Services } from "./Services"

export const Vitrificacao = () => {
    return(
        <section className="serviceItem_section">
            <div className="vitrificacao_background">
                <h2>Vitrificação</h2>
            </div>
            <div className="serviceItem_text_section">
                <div className="serviceItem_second_text_section">
                    <h5>A Vitrificação da Pintura do seu carro na Crossover Autos garante maior resistência e beleza!</h5>
                    <p>A vitrificação automotiva é um tratamento que cria um super protetor para a pintura com o uso de sua matéria prima que é o “polissilazano” que forma uma película chamada “sílica vítrea” que protege essa pintura contra os efeitos nocivos dos raios UV.<br/>Isso evita principalmente, o desbotamento da pintura, e impede que as sujeiras penetrem na pintura do veículo, dificultando assim que qualquer sujeira possa grudar nessa superfície. O produto ainda possui uma função auto limpante, formando uma película mais dura e resistente que impede também a deterioração do brilho da pintura.</p>
                </div>
            </div>
            <h2>Galeria de Imagens</h2>
            <ImageSwiper DataArray={imageArray} />
            <Services />
        </section>
    )
}